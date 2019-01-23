// @flow

import express from 'express';
import bodyParser from 'body-parser';
import mountLogs from './mountLogs';
import mountInputValidator from './mountInputValidator';
import mountEndpoints from './mountEndpoints';
import endpoints from './endpoints/index';
import type {
  Application, NextFunction, Request, Response,
} from './types';

const app: Application = express();

mountLogs(app);

app.use(bodyParser.json());

mountInputValidator(app, endpoints);

mountEndpoints(app, endpoints);

app.use((error, req: Request, res: Response, next: NextFunction) => {
  // catch bodyParser error
  if (error instanceof SyntaxError) {
    req.logger.warning(`Bad request ${req.path}: ${error.message}`);
    res.status(400).send({ error: error.message });
  } else {
    req.logger.error(`Server error ${req.path}: ${error.message}`);
    res.status(500).send({ error: 'Internal server error' });
  }
});

export default app;
