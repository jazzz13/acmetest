"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Endpoint = _interopRequireDefault(require("../Endpoint"));

var _resolver = _interopRequireDefault(require("./resolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SCHEMA = {
  type: "object",
  properties: {
    numbers: {
      type: "array",
      items: {
        type: "number"
      }
    }
  },
  required: ['numbers']
};

var _default = new _Endpoint.default({
  path: '/sqrt',
  method: 'POST',
  bodyDataSchema: SCHEMA,
  resolver: _resolver.default
});

exports.default = _default;