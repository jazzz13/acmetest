// @flow

import express from 'express'
import mountLogs from './mountLogs'
import mountInputValidator from './mountInputValidator'
import mountEndpoints from './mountEndpoints'
import endpoints from "./endpoints/index";
import type {Application} from './types';

const app: Application = express();

mountLogs(app);

mountInputValidator(app, endpoints);

mountEndpoints(app, endpoints);

export default app