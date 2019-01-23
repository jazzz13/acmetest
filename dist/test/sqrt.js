"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mocha = require("mocha");

var _helpers = require("./helpers");

const schema = {
  type: "object",
  properties: {
    result: {
      type: "array",
      items: {
        type: "number"
      }
    }
  },
  required: ['result']
};
var _default = {
  positive: (request, numbers, results) => {
    (0, _mocha.it)(`√ [${numbers.join(',')}] = [${results.join(',')}]`, done => {
      request.post(`/sqrt`).send({
        numbers
      }).end((err, res) => (0, _helpers.checkResponse)({
        res,
        status: 200,
        schema,
        result: results
      }, done));
    });
  },
  negative: (request, numbers, error) => {
    (0, _mocha.it)(`Wrong input: "${numbers ? numbers.toString() : 'undefined'}"`, done => {
      request.post(`/sqrt`).send({
        numbers
      }).end((err, res) => (0, _helpers.checkResponse)({
        res,
        status: 400,
        schema: _helpers.ErrorSchema,
        error
      }, done));
    });
  }
};
exports.default = _default;