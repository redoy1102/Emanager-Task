import mongoose, { Schema, Document } from 'mongoose';

export interface ICartItem {
  id: string;
  title: string;
  selectedPrice: number;
  quantity: number;
  selectedDuration: number;
  thumbnail?: string;
  priceDuration?: any[];
  details?: string;
}

export interface IOrder extends Document {
  name: string;
  whatsapp: string;
  email: string;
  cart: ICartItem[];
  total: number;
}

const cartItemSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  selectedPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  selectedDuration: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  priceDuration: {
    type: Schema.Types.Mixed,
  },
  details: {
    type: String,
  },
}, { _id: false });

const orderSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cart: {
    type: [cartItemSchema],
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
},
  {
    timestamps: true,
  });

const Order = mongoose.model<IOrder>('Order', orderSchema);

export default Order;