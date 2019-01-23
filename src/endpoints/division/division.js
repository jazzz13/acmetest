// @flow

import Endpoint from '../Endpoint';
import resolver from './resolver';

const SCHEMA = {
  type: 'object',
  properties: {
    a: { type: 'string' },
    b: { type: 'string' },
  },
  required: ['a', 'b'],
};

export default new Endpoint({
  path: '/division',
  method: 'GET',
  queryDataSchema: SCHEMA,
  resolver,
});
