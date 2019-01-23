// @flow

import fs from 'fs'

import type {LogStorage} from "./Logger";

export default class FileStorage implements LogStorage {

    _stream: any;

    constructor(fileName: string) {

        this._stream = fs.createWriteStream(fileName, { flags: 'a' })
    }

    putLog(l: string, m: string) {

        this._stream.write(`${new Date().toISOString()}; level=${l}; message=${m} \n`)
    }
}
