// @flow

import type {$Request, $Response} from 'express'

export default ({body}: $Request, res: $Response) => {

    const result: number[] = [];

    for (const n of (body: any).numbers) {

        if (n < 0) {
            throw new Error('https://bit.ly/2FT6pcM')
        }

        result.push(Math.sqrt(n))
    }

    res.send({result})
}