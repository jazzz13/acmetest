'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sqrt = require('./sqrt');

var _sqrt2 = _interopRequireDefault(_sqrt);

var _division = require('./division');

var _division2 = _interopRequireDefault(_division);

var _Endpoint = require('./Endpoint');

var _Endpoint2 = _interopRequireDefault(_Endpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const endpoints = [_sqrt2.default, _division2.default];

exports.default = endpoints;