// @flow

import type {$Request, $Response} from "express";

type MethodEnum = 'GET' | 'POST'
type ResolverType = (req: $Request, res: $Response) => void

type Args = {
    path: string,
    method: MethodEnum,
    resolver: ResolverType,
    inputDataSchema?: any
}

export default class Endpoint {

    path: string;
    method: MethodEnum;
    resolver: ResolverType;
    inputDataSchema: ?any;

    constructor(arg: Args) {

        Object.assign(this, arg)
    }
}