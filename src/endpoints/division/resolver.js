// @flow

import type { Request, Response } from '../../types';

export default ({ query, logger }: Request, res: Response) => {
  const [a, b] = [query.a, query.b].map(x => parseFloat(x));

  if (isNaN(a) || isNaN(b)) {
    throw new Error("Request query doesn't match schema");
  }

  if (b === 0) {
    throw new Error('Zero division error');
  }

  const result = a / b;

  logger.info(`division ${a} / ${b} = ${result}`);

  res.send({ result });
};
