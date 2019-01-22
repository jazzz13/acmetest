// @flow

import {it} from 'mocha'
import server from '../server/server.js'
import {checkResponse, ErrorSchema} from './helpers'

const schema = {
    type: "object",
    properties: {
        result: { type: "number" },
    },
    required: ['result']
};

export default {
    positive: (chai: any, a: number, b: number, result: number) => {

        it(`${a} / ${b} = ${result}`, (done) => {
            chai.request(server)
                .get(`/division?a=${a}&b=${b}`)
                .end((err, res) => checkResponse({res, status: 200, schema, result}, done));
        });

    },

    negative: (chai: any, query: string, error: string) => {

        it(`Wrong query: "${query}"`, (done) => {
            chai.request(server)
                .get(`/division${query}`)
                .end((err, res) => checkResponse({res, status: 400, schema: ErrorSchema, error}, done));
        });

    },
};