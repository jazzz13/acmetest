// @flow

import express from 'express'
import bodyParser from 'body-parser'
import mountInputValidator from './mountInputValidator'
import mountEndpoints from './mountEndpoints'
import endpoints from "./endpoints/index";
import type { $Application } from 'express';

const app: $Application = express();

app.use(bodyParser.json());

mountInputValidator(app, endpoints);

mountEndpoints(app, endpoints);

export default app