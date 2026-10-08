import { dispatch } from './dispatch';

const sample = dispatch({
  id: 'ord_local',
  customerId: 'cust_local',
  lane: 'harbor',
  amountCents: 1800,
  status: 'queued'
});

console.log(JSON.stringify(sample));
