// @flow

import {it} from 'mocha'
import server from '../server/server.js'
import {checkResponse, ErrorSchema} from './helpers'

const schema = {
    type: "object",
    properties: {
        result: {
            type: "array",
            items: {type: "number"}
        },
    },
    required: ['result']
};

export default {
    positive: (chai: any, numbers: number[], results: number[]) => {

        it(`√ [${numbers.join(',')}] = [${results.join(',')}]`, (done) => {
            chai.request(server)
                .post(`/sqrt`)
                .send({numbers})
                .end((err, res) => checkResponse({res, status: 200, schema, result: results}, done));
        });

    },

    negative: (chai: any, numbers?: any, error: string) => {

        it(`Wrong input: "${numbers ? numbers.toString() : 'undefined'}"`, (done) => {
            chai.request(server)
                .post(`/sqrt`)
                .send({numbers})
                .end((err, res) => checkResponse({res, status: 400, schema: ErrorSchema, error}, done));
        });

    },
};