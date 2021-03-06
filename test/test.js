// @flow

import { describe } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/server';
import division from './division';
import sqrt from './sqrt';

chai.use(chaiHttp);
const request = () => chai.request(server);

describe('GET /division', () => {
  describe('Positive', () => {
    division.positive(request(), 10, 2, 5);
    division.positive(request(), 100, 3, 100 / 3);
    division.positive(request(), 0, 13, 0);
    division.positive(request(), 12345678912345678, 2, 6172839456172839);
  });

  describe('Negative', () => {
    const hint = "Request query doesn't match schema";

    division.negative(request(), '?a=10&b=asd', hint);
    division.negative(request(), '?b=asd', hint);
    division.negative(request(), '?asd', hint);
    division.negative(request(), '?', hint);
    division.negative(request(), '', hint);

    division.negative(request(), '?a=20&b=0', 'Zero division error');
  });
});


describe('POST /sqrt', () => {
  describe('Positive', () => {
    sqrt.positive(request(), [], []);
    sqrt.positive(request(), [81], [9]);
    sqrt.positive(request(), [4, 16], [2, 4]);
    sqrt.positive(request(), [1, 144, 30], [1, 12, Math.sqrt(30)]);
    sqrt.positive(request(), [999998000001], [999999]);
  });

  describe('Negative', () => {
    const calmDown = 'https://bit.ly/2FT6pcM';

    sqrt.negative(request(), [-10], calmDown);
    sqrt.negative(request(), [200, -1], calmDown);

    const wrongSchemaMessage = "Request body doesn't match schema";

    sqrt.negative(request(), undefined, wrongSchemaMessage);
    sqrt.negative(request(), { foo: 'bar' }, wrongSchemaMessage);
  });
});
