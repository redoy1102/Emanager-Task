export interface Order {
  productId: string;
  customerId: string;
  quantity: number;
  totalPrice: number;
}

export interface Customer {
  name: string;
  whatsapp: string;
  email: string;
}