"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Endpoint = _interopRequireDefault(require("./Endpoint"));

var _sqrt = _interopRequireDefault(require("./sqrt"));

var _division = _interopRequireDefault(require("./division"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const endpoints = [_sqrt.default, _division.default];
var _default = endpoints;
exports.default = _default;