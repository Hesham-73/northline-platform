export interface OrderRequest {
  customerId: string;
  lane: string;
  amountCents: number;
}

export interface OrderRecord extends OrderRequest {
  id: string;
  status: 'accepted' | 'queued';
}
