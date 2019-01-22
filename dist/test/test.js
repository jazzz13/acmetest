'use strict';

var _mocha = require('mocha');

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../server/server.js');

var _server2 = _interopRequireDefault(_server);

var _division = require('./division');

var _division2 = _interopRequireDefault(_division);

var _sqrt = require('./sqrt');

var _sqrt2 = _interopRequireDefault(_sqrt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);
const request = () => _chai2.default.request(_server2.default);

(0, _mocha.describe)('GET /division', () => {
    (0, _mocha.describe)('Positive', () => {

        _division2.default.positive(request(), 10, 2, 5);
        _division2.default.positive(request(), 100, 3, 100 / 3);
        _division2.default.positive(request(), 0, 13, 0);
    });

    (0, _mocha.describe)('Negative', () => {

        const hint = 'Please send a=number&b=number';

        _division2.default.negative(request(), '?a=10&b=asd', hint);
        _division2.default.negative(request(), '?b=asd', hint);
        _division2.default.negative(request(), '?asd', hint);
        _division2.default.negative(request(), '?', hint);
        _division2.default.negative(request(), '', hint);

        _division2.default.negative(request(), '?a=20&b=0', 'Zero division error');
    });
});

(0, _mocha.describe)('POST /sqrt', () => {

    (0, _mocha.describe)('Positive', () => {

        _sqrt2.default.positive(request(), [], []);
        _sqrt2.default.positive(request(), [81], [9]);
        _sqrt2.default.positive(request(), [4, 16], [2, 4]);
        _sqrt2.default.positive(request(), [1, 144, 30], [1, 12, Math.sqrt(30)]);
    });

    (0, _mocha.describe)('Negative', () => {

        const calmDown = 'https://bit.ly/2FT6pcM';

        _sqrt2.default.negative(request(), [-10], calmDown);
        _sqrt2.default.negative(request(), [200, -1], calmDown);

        const wrongSchemaMessage = "Request body isn't valid";

        _sqrt2.default.negative(request(), undefined, wrongSchemaMessage);
        _sqrt2.default.negative(request(), { foo: 'bar' }, wrongSchemaMessage);
    });
});