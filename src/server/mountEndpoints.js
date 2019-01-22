// @flow

import {buildArgumentError, sendError} from "../helpers";
import Endpoint from "./endpoints/Endpoint";
import type { $Application, $Request, $Response } from 'express'

export default (app: $Application, endpoints: Endpoint[]) => {

    console.log('Endpoints:');

    for (const {path, method, resolver} of endpoints) {

        const hander = (req: $Request, res: $Response) => {

            try {

                const response = resolver(req, buildArgumentError(res));

                if (response !== undefined) {

                    res.send({result: response})
                }
            }
            catch (e) {

                sendError(res, 500, 'Internal server error')
            }
        };

        switch (method) {
            case 'get': app.get(path, hander); break;
            case 'post': app.post(path, hander); break;
        }

        console.log(`${method} http://localhost:3000${path}`);
    }
}