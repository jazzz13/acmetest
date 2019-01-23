"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Endpoint = _interopRequireDefault(require("./endpoints/Endpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (app, endpoints) => {
  console.log('Endpoints:');

  for (const {
    path,
    method,
    resolver
  } of endpoints) {
    const handler = (req, res) => {
      try {
        resolver(req, res);
      } catch (e) {
        res.status(400).send({
          error: e.message
        });
      }
    };

    switch (method) {
      case 'GET':
        app.get(path, handler);
        break;

      case 'POST':
        app.post(path, handler);
        break;
    }

    console.log(`${method} http://localhost:3000${path}`);
  }

  app.use((error, req, res, next) => {
    res.status(500).send({
      error: 'Internal server error'
    });
  });
};

exports.default = _default;