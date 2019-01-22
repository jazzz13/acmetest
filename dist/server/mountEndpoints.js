"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helpers = require("../helpers");

var _Endpoint = require("./endpoints/Endpoint");

var _Endpoint2 = _interopRequireDefault(_Endpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (app, endpoints) => {

    console.log('Endpoints:');

    for (const { path, method, resolver } of endpoints) {

        const handler = (req, res) => {

            try {

                const response = resolver(req, (0, _helpers.buildArgumentError)(res));

                if (response !== undefined) {

                    res.send({ result: response });
                }
            } catch (e) {

                (0, _helpers.sendError)(res, 500, 'Internal server error');
            }
        };

        switch (method) {
            case 'get':
                app.get(path, handler);break;
            case 'post':
                app.post(path, handler);break;
        }

        console.log(`${method} http://localhost:3000${path}`);
    }
};