export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  duration: number;
  image?: string;
}

export interface Order {
  name: string;
  whatsapp: string;
  email: string;
  cart: CartItem[];
  total: number;
}

export interface Customer {
  name: string;
  whatsapp: string;
  email: string;
}