// @flow

import express from 'express'
import mountInputValidator from './mountInputValidator'
import mountEndpoints from './mountEndpoints'
import endpoints from "./endpoints/index";
import type { $Application } from 'express';

const app: $Application = express();

mountInputValidator(app, endpoints);

mountEndpoints(app, endpoints);

export default app