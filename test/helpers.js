// @flow

import {expect} from 'chai'
import {validate} from 'jsonschema'

export const ErrorSchema = {
    type: "object",
    properties: {
        error: { type: "string" },
    },
    required: ['error']
};

type Done = () => void

type Args = {
    res: {
        status: number,
        body: any
    },
    status?: number,
    schema?: any,
    result?: any,
    error?: any,
}

export const checkResponse = ({res, status, schema, result, error}: Args, done: Done) => {

    if (status) {
        expect(res.status).eql(status);
    }

    if (schema) {
        expect(validate(res.body, schema).valid, "Response body doesn't match schema").eql(true)
    }

    if (result) {
        expect(res.body).eql({result});
    }

    if (error) {
        expect(res.body).eql({error});
    }

    done()
}