// @flow

import { Pool } from 'pg';
import ENV from '../env';
import type { LogStorage } from './Logger';

const TABLE_NAME = 'logs';

export default class DBStorage implements LogStorage {
    _pool: any;

    constructor() {
      this._pool = new Pool({
        user: ENV.DB_USER,
        host: ENV.DB_HOST,
        database: ENV.DB_DATABASE,
        password: ENV.DB_PASS,
        port: ENV.DB_PORT,
      });
    }

    putLog(l: string, m: string) {
      this._pool.query(`INSERT INTO ${TABLE_NAME}(level, message) VALUES ($1, $2);`, [l, m], (err, res) => {
        if (err) {
          console.log(`DB error: ${err}`);
        }
      });
    }
}
