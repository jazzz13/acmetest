"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkResponse = exports.ErrorSchema = void 0;

var _chai = require("chai");

var _jsonschema = require("jsonschema");

const ErrorSchema = {
  type: "object",
  properties: {
    error: {
      type: "string"
    }
  },
  required: ['error']
};
exports.ErrorSchema = ErrorSchema;

const checkResponse = ({
  res,
  status,
  schema,
  result,
  error
}, done) => {
  if (status) {
    (0, _chai.expect)(res.status).eql(status);
  }

  if (schema) {
    (0, _chai.expect)((0, _jsonschema.validate)(res.body, schema).valid, "Response body doesn't match schema").eql(true);
  }

  if (result) {
    (0, _chai.expect)(res.body).eql({
      result
    });
  }

  if (error) {
    (0, _chai.expect)(res.body).eql({
      error
    });
  }

  done();
};

exports.checkResponse = checkResponse;