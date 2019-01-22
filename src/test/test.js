// @flow

import {describe} from 'mocha'
import chai from 'chai'
import chaiHttp from 'chai-http'
import division from './division'
import sqrt from './sqrt'

chai.use(chaiHttp);

describe('GET /division', () => {
    describe('Positive', () => {

        division.positive(chai, 10, 2, 5);
        division.positive(chai, 100, 3, 100 / 3);
        division.positive(chai, 0, 13, 0);

    });

    describe('Negative', () => {

        const hint = 'Please send a=number&b=number';

        division.negative(chai, '?a=10&b=asd', hint);
        division.negative(chai, '?b=asd', hint);
        division.negative(chai, '?asd', hint);
        division.negative(chai, '?', hint);
        division.negative(chai, '', hint);

        division.negative(chai, '?a=20&b=0', 'Zero division error');
    })
});


describe('POST /sqrt', () => {

    describe('Positive', () => {

        sqrt.positive(chai, [81], [9])
        sqrt.positive(chai, [4, 16], [2, 4])
        sqrt.positive(chai, [1, 144, 30], [1, 12, Math.sqrt(30)])

    });

    describe('Negative', () => {

        const calmDown = 'https://bit.ly/2FT6pcM'

        sqrt.negative(chai, [-10], calmDown)
        sqrt.negative(chai, [200, -1], calmDown)

        const wrongSchemaMessage = "Input json isn't valid"


        sqrt.negative(chai, undefined, wrongSchemaMessage)
        sqrt.negative(chai, {foo: 'bar'}, wrongSchemaMessage)

    });

});