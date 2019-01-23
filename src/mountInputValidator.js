// @flow

import Endpoint from "./endpoints/Endpoint"
import {validate} from 'jsonschema'
import type {Request, Response, Application, NextFunction} from './types'

export default (app: Application, endpoints: Endpoint[]): void => {

    app.use((req: Request, res: Response, next: NextFunction) => {

        const endpoint = endpoints.find(({path, method}) => path === req.path && method === req.method);

        if (endpoint) {

            try {
                if (endpoint.bodyDataSchema && !validate(req.body, endpoint.bodyDataSchema).valid) {

                    throw new Error(`Request body doesn't match schema`)
                }

                if (endpoint.queryDataSchema && !validate(req.query, endpoint.queryDataSchema).valid) {

                    throw new Error(`Request query doesn't match schema`)
                }

                next();

            } catch (e) {

                req.logger.warning(`Bad request ${req.path}: ${e.message}`);
                res.status(400).send({error: e.message});
            }
        }
    });
}