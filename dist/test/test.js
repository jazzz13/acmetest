"use strict";

var _mocha = require("mocha");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _server = _interopRequireDefault(require("../server/server.js"));

var _division = _interopRequireDefault(require("./division"));

var _sqrt = _interopRequireDefault(require("./sqrt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

const request = () => _chai.default.request(_server.default);

(0, _mocha.describe)('GET /division', () => {
  (0, _mocha.describe)('Positive', () => {
    _division.default.positive(request(), 10, 2, 5);

    _division.default.positive(request(), 100, 3, 100 / 3);

    _division.default.positive(request(), 0, 13, 0);
  });
  (0, _mocha.describe)('Negative', () => {
    const hint = "Request query isn't valid";

    _division.default.negative(request(), '?a=10&b=asd', hint);

    _division.default.negative(request(), '?b=asd', hint);

    _division.default.negative(request(), '?asd', hint);

    _division.default.negative(request(), '?', hint);

    _division.default.negative(request(), '', hint);

    _division.default.negative(request(), '?a=20&b=0', 'Zero division error');
  });
});
(0, _mocha.describe)('POST /sqrt', () => {
  (0, _mocha.describe)('Positive', () => {
    _sqrt.default.positive(request(), [], []);

    _sqrt.default.positive(request(), [81], [9]);

    _sqrt.default.positive(request(), [4, 16], [2, 4]);

    _sqrt.default.positive(request(), [1, 144, 30], [1, 12, Math.sqrt(30)]);
  });
  (0, _mocha.describe)('Negative', () => {
    const calmDown = 'https://bit.ly/2FT6pcM';

    _sqrt.default.negative(request(), [-10], calmDown);

    _sqrt.default.negative(request(), [200, -1], calmDown);

    const wrongSchemaMessage = "Request body isn't valid";

    _sqrt.default.negative(request(), undefined, wrongSchemaMessage);

    _sqrt.default.negative(request(), {
      foo: 'bar'
    }, wrongSchemaMessage);
  });
});