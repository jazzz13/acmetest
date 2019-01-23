// @flow

import Logger from './logger/index'
import ENVS from './env/index'
import type {Request, Response, Application, NextFunction} from './types'

export default (app: Application): void => {

    const logger = new Logger(ENVS.isProd ? 'prod' : 'test');

    app.use((req: Request, res: Response, next: NextFunction) => {

        req.logger = logger;

        next();
    });
}