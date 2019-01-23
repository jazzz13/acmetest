"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Endpoint = _interopRequireDefault(require("./endpoints/Endpoint"));

var _jsonschema = require("jsonschema");

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (app, endpoints) => {
  app.use(_bodyParser.default.json());
  app.use((req, res, next) => {
    const endpoint = endpoints.find(({
      path,
      method
    }) => path === req.path && method === req.method);

    if (endpoint && endpoint.inputDataSchema) {
      const targetField = req.method === 'GET' ? 'query' : 'body';

      if (!(0, _jsonschema.validate)(req[targetField], endpoint.inputDataSchema).valid) {
        throw new SyntaxError(`Request ${targetField} isn't valid`);
      }
    }

    next();
  });
  app.use((error, req, res, next) => {
    if (error instanceof SyntaxError) {
      res.status(400).send({
        error: error.message
      });
    } else {
      next();
    }
  });
};

exports.default = _default;