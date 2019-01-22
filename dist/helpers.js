'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const sendError = exports.sendError = (res, code, message) => res.status(code).send({ error: message });

const buildArgumentError = exports.buildArgumentError = res => message => {
    sendError(res, 400, message);
};

const retrieveFloatsFromObject = exports.retrieveFloatsFromObject = (query, keys) => {

    const result = [];

    keys.forEach(key => result.push(parseFloat(query[key])));

    return result;
};