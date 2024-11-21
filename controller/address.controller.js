import  Address from "../model/address.model.js"

export const saveAddress = async (req, res) => {  
  try {  
    const { name, street, city, zip } = req.body;  

    // Basic validation  
    if (!name || !street || !city || !zip) {  
      return res.status(400).json({ message: 'All fields are required.' });  
    }  

    // Assuming you have user authentication and can access userId from the request  
    if (!req.user || !req.user.id) {  
      return res.status(401).json({ message: 'User not authenticated.' });  
    }  

    const userId = req.user?.id || 'YOUR_TEST_USER_ID';
 // Replace this with actual user identification  

    const newAddress = new Address({  
      userId,  
      name,  
      street,  
      city,  
      zip,  
    });  

    const savedAddress = await newAddress.save();  
    res.status(201).json({ message: 'Address saved successfully', address: savedAddress });  
  } catch (error) {  
    console.error(error);  
    // Check if it's a validation error  
    if (error.name === 'ValidationError') {  
      return res.status(400).json({ message: 'Validation error', details: error.errors });  
    }  
    res.status(500).json({ message: 'Server Error' });  
  }  
};
export default saveAddress;