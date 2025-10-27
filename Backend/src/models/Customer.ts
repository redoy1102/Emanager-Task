import { Schema, model } from 'mongoose';

const customerSchema = new Schema({
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
    unique: true,
  },
}, {
  timestamps: true,
});

export const Customer = model('Customer', customerSchema);