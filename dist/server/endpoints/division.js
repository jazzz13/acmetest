'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Endpoint = require('./Endpoint');

var _Endpoint2 = _interopRequireDefault(_Endpoint);

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _Endpoint2.default({
    path: '/division',
    method: 'get',
    resolver: ({ query }, argumentError) => {

        const [a, b] = (0, _helpers.retrieveFloatsFromObject)(query, ['a', 'b']);

        if (isNaN(a) || isNaN(b)) {
            return argumentError('Please send a=number&b=number');
        }

        if (b === 0) {
            return argumentError('Zero division error');
        }

        return a / b;
    }
});