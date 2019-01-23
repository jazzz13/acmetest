"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  query
}, res) => {
  const [a, b] = [query.a, query.b].map(x => parseFloat(x));

  if (isNaN(a) || isNaN(b)) {
    throw new Error("Request query isn't valid");
  }

  if (b === 0) {
    throw new Error('Zero division error');
  }

  res.send({
    result: a / b
  });
};

exports.default = _default;