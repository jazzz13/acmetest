// @flow

import FileStorage from './FileStorage';
import DBStorage from './DBStorage';

export interface LogStorage {
    putLog(l: string, m: string): void
}

export default class Logger {
    _storages: LogStorage[];

    constructor(env: 'test' | 'prod') {
      if (env === 'prod') {
        this._storages = [
          new FileStorage('logs.txt'),
          new DBStorage(),
        ];
      } else {
        this._storages = [
          new FileStorage('test_logs.txt'),
        ];
      }
    }

    error(m: string): void {
      this._postLog('error', m);
    }

    warning(m: string): void {
      this._postLog('warning', m);
    }

    info(m: string): void {
      this._postLog('info', m);
    }

    _postLog(l: string, m: string): void {
      this._storages.forEach((storage) => {
        storage.putLog(l, m);
      });
    }
}
