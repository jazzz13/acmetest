// @flow

import type { $Response } from 'express';

export const sendError = (res: $Response, code: number, message: string) => res.status(code).send({error: message});

export const buildArgumentError = (res: $Response) => (message: string): void => {
    sendError(res, 404, message)
};

export const retrieveFloatsFromObject = (query: any, keys: string[]) => {

    const result = [];

    keys.forEach((key) => result.push(parseFloat(query[key])));

    return result
};