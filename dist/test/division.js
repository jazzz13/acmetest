'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mocha = require('mocha');

var _helpers = require('./helpers');

const schema = {
    type: "object",
    properties: {
        result: { type: "number" }
    },
    required: ['result']
};

exports.default = {
    positive: (request, a, b, result) => {

        (0, _mocha.it)(`${a} / ${b} = ${result}`, done => {
            request.get(`/division?a=${a}&b=${b}`).end((err, res) => (0, _helpers.checkResponse)({ res, status: 200, schema, result }, done));
        });
    },

    negative: (request, query, error) => {

        (0, _mocha.it)(`Wrong query: "${query}"`, done => {
            request.get(`/division${query}`).end((err, res) => (0, _helpers.checkResponse)({ res, status: 400, schema: _helpers.ErrorSchema, error }, done));
        });
    }
};