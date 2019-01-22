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
        result: {
            type: "array",
            items: { type: "number" }
        }
    },
    required: ['result']
};

exports.default = {
    positive: (chai, numbers, results) => {

        (0, _mocha.it)(`√ [${numbers.join(',')}] = [${results.join(',')}]`, done => {
            chai.request(_server2.default).post(`/sqrt`).send({ numbers }).end((err, res) => (0, _helpers.checkResponse)({ res, status: 200, schema, result: results }, done));
        });
    },

    negative: (chai, numbers, error) => {

        (0, _mocha.it)(`Wrong input: "${numbers ? numbers.toString() : 'undefined'}"`, done => {
            chai.request(_server2.default).post(`/sqrt`).send({ numbers }).end((err, res) => (0, _helpers.checkResponse)({ res, status: 400, schema: _helpers.ErrorSchema, error }, done));
        });
    }
};