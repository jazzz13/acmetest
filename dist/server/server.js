"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _mountInputValidator = _interopRequireDefault(require("./mountInputValidator"));

var _mountEndpoints = _interopRequireDefault(require("./mountEndpoints"));

var _index = _interopRequireDefault(require("./endpoints/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
(0, _mountInputValidator.default)(app, _index.default);
(0, _mountEndpoints.default)(app, _index.default);
var _default = app;
exports.default = _default;