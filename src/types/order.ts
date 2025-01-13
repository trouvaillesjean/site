export type OrderStatus = 'pending_payment' | 'paid' | 'shipped' | 'delivered' | 'confirmed' | 'disputed';

export interface Order {
  id: string;
  itemId: string;
  buyerId: string;
  sellerId: string;
  price: number;
  shippingCost: number;
  platformFee: number;
  status: OrderStatus;
  trackingNumber?: string;
  createdAt: Date;
  updatedAt: Date;
  disputeReason?: string;
}