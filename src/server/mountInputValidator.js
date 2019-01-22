// @flow

import {buildArgumentError} from '../helpers'
import Endpoint from "./endpoints/Endpoint"
import {validate} from 'jsonschema'
import type {$Application, $Request, $Response, NextFunction} from 'express'

export default (app: $Application, endpoints: Endpoint[]) => {

    app.use('/', (req: $Request, res: $Response, next: NextFunction) => {

        const endpoint = endpoints.find(enpoint => enpoint.path === req.path);

        if (endpoint && endpoint.inputDataSchema) {

            if (!validate(req.body, endpoint.inputDataSchema).valid) {

                return buildArgumentError(res)("Input body isn't valid")
            }
        }

        next()
    });
}