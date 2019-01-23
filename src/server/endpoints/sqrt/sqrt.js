// @flow

import Endpoint from '../Endpoint'
import resolver from './resolver'

const SCHEMA = {
    type: "object",
    properties: {
        numbers: {
            type: "array",
            items: {type: "number"}
        },
    },
    required: ['numbers']
};

export default new Endpoint({
    path: '/sqrt',
    method: 'POST',
    bodyDataSchema: SCHEMA,
    resolver
})