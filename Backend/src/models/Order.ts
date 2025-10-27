import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  productId: string;
  customerId: string;
  quantity: number;
  totalPrice: number;
}

const orderSchema: Schema = new Schema({
  productId: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const Order = mongoose.model<IOrder>('Order', orderSchema);

export default Order;