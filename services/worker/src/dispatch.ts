import { OrderRecord } from '../../../packages/contracts/src/index';

export function dispatch(order: OrderRecord) {
  return { orderId: order.id, queue: 'lane-dispatch' };
}
