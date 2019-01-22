'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mountInputValidator = require('./mountInputValidator');

var _mountInputValidator2 = _interopRequireDefault(_mountInputValidator);

var _mountEndpoints = require('./mountEndpoints');

var _mountEndpoints2 = _interopRequireDefault(_mountEndpoints);

var _index = require('./endpoints/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

(0, _mountInputValidator2.default)(app, _index2.default);

(0, _mountEndpoints2.default)(app, _index2.default);

exports.default = app;