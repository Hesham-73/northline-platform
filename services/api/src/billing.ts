import type { Request, Response } from 'express';

export function quoteLane(_request: Request, response: Response) {
  response.json({ currency: 'USD', amountCents: 1800 });
}
