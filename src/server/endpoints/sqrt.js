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
    resolver: ({body}, argumentError) => {

        const result: number[] = [];

        for (const n of body.numbers) {

            if (n < 0) {
                return argumentError('https://bit.ly/2FT6pcM')
            }

            result.push(Math.sqrt(n))
        }

        return result
    }
})