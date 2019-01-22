// @flow

type MethodEnum = 'get' | 'post'
type ArgumentErrorHandler = (string) => void
type ResolverType = ({query: any, body: any}, ArgumentErrorHandler) => any

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