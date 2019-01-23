// @flow

import Endpoint from "./endpoints/Endpoint"
import {validate} from 'jsonschema'
import bodyParser from "body-parser"
import type {$Application, $Request, $Response, NextFunction} from 'express'

export default (app: $Application, endpoints: Endpoint[]) => {

    app.use(bodyParser.json());

    app.use((req: $Request, res: $Response, next: NextFunction) => {

        const endpoint = endpoints.find(({path, method}) => path === req.path && method === req.method);

        if (endpoint) {

            if (endpoint.bodyDataSchema && !validate(req.body, endpoint.bodyDataSchema).valid) {

                throw new SyntaxError(`Request body isn't valid`)
            }

            if (endpoint.queryDataSchema && !validate(req.query, endpoint.queryDataSchema).valid) {

                throw new SyntaxError(`Request query isn't valid`)
            }
        }

        next();
    });

    app.use((error, req: $Request, res: $Response, next: NextFunction) => {

        if (error instanceof SyntaxError) {
            res.status(400).send({error: error.message});
        } else {
            next();
        }
    });
}