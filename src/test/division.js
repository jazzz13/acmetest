// @flow

import {it} from 'mocha'
import {checkResponse, ErrorSchema} from './helpers'

const schema = {
    type: "object",
    properties: {
        result: {type: "number"},
    },
    required: ['result']
};

export default {
    positive: (request: any, a: number, b: number, result: number) => {

        it(`${a} / ${b} = ${result}`, (done) => {
            request.get(`/division?a=${a}&b=${b}`)
                .end((err, res) => checkResponse({res, status: 200, schema, result}, done));
        });

    },

    negative: (request: any, query: string, error: string) => {

        it(`Wrong query: "${query}"`, (done) => {
            request.get(`/division${query}`)
                .end((err, res) => checkResponse({res, status: 400, schema: ErrorSchema, error}, done));
        });

    },
};