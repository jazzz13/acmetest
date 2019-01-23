// @flow

import type {$Request, $Response} from 'express'

export default ({query}: $Request, res: $Response) => {

    const [a, b] = [query.a, query.b].map(x => parseFloat(x))

    if (isNaN(a) || isNaN(b)) {
        throw new Error("Request query isn't valid")
    }

    if (b === 0) {
        throw new Error('Zero division error')
    }

    res.send({result: a / b})
}