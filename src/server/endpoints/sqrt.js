// @flow

import Endpoint from './Endpoint'

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
    method: 'post',
    inputDataSchema: SCHEMA,
    resolver: ({}) => {

        return 'i am sqrt!'
    }
})