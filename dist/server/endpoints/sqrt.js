"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Endpoint = require("./Endpoint");

var _Endpoint2 = _interopRequireDefault(_Endpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SCHEMA = {
    type: "object",
    properties: {
        numbers: {
            type: "array",
            items: { type: "number" }
        }
    },
    required: ['numbers']
};

exports.default = new _Endpoint2.default({
    path: '/sqrt',
    method: 'post',
    inputDataSchema: SCHEMA,
    resolver: ({ body }, argumentError) => {

        const result = [];

        for (const n of body.numbers) {

            if (n < 0) {
                return argumentError('https://bit.ly/2FT6pcM');
            }

            result.push(Math.sqrt(n));
        }

        return result;
    }
});