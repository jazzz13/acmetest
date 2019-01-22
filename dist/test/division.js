'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mocha = require('mocha');

var _server = require('../server/server.js');

var _server2 = _interopRequireDefault(_server);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = {
    type: "object",
    properties: {
        result: { type: "number" }
    },
    required: ['result']
};

exports.default = {
    positive: (chai, a, b, result) => {

        (0, _mocha.it)(`${a} / ${b} = ${result}`, done => {
            chai.request(_server2.default).get(`/division?a=${a}&b=${b}`).end((err, res) => (0, _helpers.checkResponse)({ res, status: 200, schema, result }, done));
        });
    },

    negative: (chai, query, error) => {

        (0, _mocha.it)(`Wrong query: "${query}"`, done => {
            chai.request(_server2.default).get(`/division${query}`).end((err, res) => (0, _helpers.checkResponse)({ res, status: 400, schema: _helpers.ErrorSchema, error }, done));
        });
    }
};