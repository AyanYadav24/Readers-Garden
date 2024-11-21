import Coupon from '../model/coupon.model.js';

export const createCoupon = async (req, res) => {
  const { code, discountType, discountValue, expiryDate, minimumPurchase } = req.body;

  try {
    const coupon = new Coupon({ code, discountType, discountValue, expiryDate, minimumPurchase });
    await coupon.save();
    res.status(201).json(coupon);
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json({ message: 'Error creating coupon' });
  }
};

export const getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json(error);
  }
};

export const getCouponById = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    if (!coupon) {
      return res.status(404).json({ message: 'Coupon not found' });
    }
    res.json(coupon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}
export const applyCoupon = async (req, res) => {
  const { code, purchaseAmount } = req.body;
  console.log("Applying coupon:", code, "for amount:", purchaseAmount);

  try {
    // Find the coupon by code
    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
      console.log("Coupon not found"); 
      return res.status(404).json({ message: 'Invalid coupon code' });
    }

    // Check if the coupon is expired
    if (coupon.expiryDate && coupon.expiryDate < new Date()) {
      return res.status(400).json({ message: 'Coupon has expired' });
    }

    // Check if the minimum purchase condition is met
    if (coupon.minimumPurchase && purchaseAmount < coupon.minimumPurchase) {
      return res.status(400).json({
        message: `Minimum purchase of ${coupon.minimumPurchase} is required to apply this coupon`,
      });
    }

    // Calculate the discount based on coupon type
    let discount = 0;
    if (coupon.discountType === 'percentage') {
      discount = (coupon.discountValue / 100) * purchaseAmount;
    } else if (coupon.discountType === 'fixed') {
      discount = coupon.discountValue;
    }

    // Calculate the final amount after applying the discount
    const finalAmount = purchaseAmount - discount;
 
    res.status(200).json({
      message: 'Coupon applied successfully',
      discount,
      finalAmount,
    });
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json({ message: 'Error applying coupon' });
  }
};