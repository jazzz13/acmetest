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
    a: {
      type: "string"
    },
    b: {
      type: "string"
    }
  },
  required: ['a', 'b']
};

var _default = new _Endpoint.default({
  path: '/division',
  method: 'GET',
  queryDataSchema: SCHEMA,
  resolver: _resolver.default
});

exports.default = _default;