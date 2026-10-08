import type { Request, Response } from 'express';
import { OrderRecord, OrderRequest } from '../../../packages/contracts/src/index';

export function createOrder(request: Request, response: Response) {
  const body = request.body as OrderRequest;
  const order: OrderRecord = { ...body, id: 'ord_local', status: 'accepted' };
  response.status(201).json(order);
}
