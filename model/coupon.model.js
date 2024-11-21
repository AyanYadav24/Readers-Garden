import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true, 
  },
  discountType: {
    type: String,
    enum: ['percentage', 'fixed'],
    required: true,
  },
  discountValue: {
    type: Number,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: false,
  },
  minimumPurchase: {
    type: Number,
    required: false,
  },
});

const Coupon = mongoose.model('Coupon', couponSchema);

export default Coupon;
