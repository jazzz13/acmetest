'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helpers = require('../helpers');

var _Endpoint = require('./endpoints/Endpoint');

var _Endpoint2 = _interopRequireDefault(_Endpoint);

var _jsonschema = require('jsonschema');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (app, endpoints) => {

    app.use(_bodyParser2.default.json());

    app.use((req, res, next) => {

        const endpoint = endpoints.find(enpoint => enpoint.path === req.path);

        if (endpoint && endpoint.method === req.method.toLowerCase() && endpoint.inputDataSchema) {

            if (!(0, _jsonschema.validate)(req.body, endpoint.inputDataSchema).valid) {

                throw new SyntaxError();
            }
        }

        next();
    });

    app.use((error, req, res, next) => {

        if (error instanceof SyntaxError) {
            (0, _helpers.buildArgumentError)(res)("Input json isn't valid");
        } else {
            next();
        }
    });
};