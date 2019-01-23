// @flow

import Endpoint from "./endpoints/Endpoint";
import type {Request, Response, Application} from './types'

export default (app: Application, endpoints: Endpoint[]) => {

    console.log('Endpoints:');

    for (const {path, method, resolver} of endpoints) {

        const handler = (req: Request, res: Response) => {

            try {
                resolver(req, res);
            }
            catch (e) {

                req.logger.warning(`Bad request ${req.path}: ${e.message}`);
                res.status(400).send({error: e.message});
            }
        };

        switch (method) {
            case 'GET': app.get(path, handler); break;
            case 'POST': app.post(path, handler); break;
        }

        console.log(`${method} http://localhost:3000${path}`);
    }
}