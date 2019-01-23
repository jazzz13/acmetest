// @flow

import type {Request, Response} from '../../types'

export default ({body, logger}: Request, res: Response) => {

    const result: number[] = [];

    for (const n of body.numbers) {

        if (n < 0) {

            throw new Error('https://bit.ly/2FT6pcM')
        }

        result.push(Math.sqrt(n))
    }

    logger.info(`sqrt[${body.numbers.toString()}] = [${result.toString()}]`);

    res.send({result})
}