// @flow

import Endpoint from './Endpoint'
import {retrieveFloatsFromObject} from '../../helpers'

export default new Endpoint({
    path: '/division',
    method: 'get',
    resolver: ({query}, argumentError) => {

        const [a, b] = retrieveFloatsFromObject(query, ['a', 'b']);

        if (isNaN(a) || isNaN(b)) {
            return argumentError('Please send a=number&b=number')
        }

        if (b === 0) {
            return argumentError('Zero division error')
        }

        return a / b
    }
})