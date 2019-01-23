"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  body
}, res) => {
  const result = [];

  for (const n of body.numbers) {
    if (n < 0) {
      throw new Error('https://bit.ly/2FT6pcM');
    }

    result.push(Math.sqrt(n));
  }

  res.send({
    result
  });
};

exports.default = _default;