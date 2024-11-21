import express from 'express';
import { createCoupon, getCoupons, getCouponById, applyCoupon } from '../controller/coupon.controller.js';

const router = express.Router();

router.post('/', createCoupon); // Create a new coupon
router.get('/', getCoupons); // Get all coupons
router.get('/:id', getCouponById); // Get a single coupon by ID
router.post('/apply', applyCoupon); // Apply coupon and get discount

export default router;
 