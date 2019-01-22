// @flow

import {buildArgumentError} from '../helpers'
import Endpoint from "./endpoints/Endpoint"
import {validate} from 'jsonschema'
import bodyParser from "body-parser";
import type {$Application, $Request, $Response, NextFunction} from 'express'

export default (app: $Application, endpoints: Endpoint[]) => {

    app.use(bodyParser.json());

    app.use((req: $Request, res: $Response, next: NextFunction) => {

        const endpoint = endpoints.find(enpoint => enpoint.path === req.path);

        if (endpoint && endpoint.method === req.method.toLowerCase() && endpoint.inputDataSchema) {

            if (!validate(req.body, endpoint.inputDataSchema).valid) {

                throw new SyntaxError
            }
        }

        next();
    });

    app.use((error, req: $Request, res: $Response, next: NextFunction) => {

        if (error instanceof SyntaxError) {
            buildArgumentError(res)("Input json isn't valid")
        } else {
            next();
        }
    });
}