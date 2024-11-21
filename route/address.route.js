// routes/address.route.js  
import express from 'express';  
import saveAddress from "../controller/address.controller.js"

const router = express.Router();  

router.post('/', saveAddress);  

export default router;