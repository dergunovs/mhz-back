import { Schema, model } from 'mongoose';

import { IUser } from '../interface';

const userSchema = new Schema<IUser>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isEmailConfirmed: { type: Boolean, default: false },
  card: { type: String },
  adress: {
    region: { type: String },
    city: { type: String },
    street: { type: String },
    house: { type: String },
    room: { type: String },
  },
  cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  favouriteProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  comparisons: [{ type: Schema.Types.ObjectId, ref: 'Comparison' }],
  configurations: [{ type: Schema.Types.ObjectId, ref: 'Configuration' }],
  date_created: { type: Date, default: Date.now },
  date_logged_in: { type: Date },
  date_updated: { type: Date },
});

export default model('User', userSchema);
