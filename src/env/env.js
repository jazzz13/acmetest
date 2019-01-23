// @flow

import defaults from './defaults'

const NODE_ENV = process.env.NODE_ENV || defaults.NODE_ENV

export default {
    isProd: NODE_ENV === 'production',
    isTest: NODE_ENV === 'test',
    DB_HOST: process.env.DB_HOST || defaults.DB_HOST,
    DB_PORT: process.env.DB_PORT || defaults.DB_PORT,
    DB_DATABASE: process.env.DB_PORT || defaults.DB_DATABASE,
    DB_USER: process.env.DB_USER || defaults.DB_USER,
    DB_PASS: process.env.DB_PASS || defaults.DB_PASS,
}