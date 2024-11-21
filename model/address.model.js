import mongoose from 'mongoose';  

const addressSchema = new mongoose.Schema({  
  userId: {  
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'User', // Reference to the User model if applicable  
    required: true,  
  },  
  name: {  
    type: String,  
    required: true,  
    minlength: 1,  
    maxlength: 100,  
  },  
  street: {  
    type: String,  
    required: true,  
    minlength: 1,  
    maxlength: 255,  
  },  
  city: {  
    type: String,  
    required: true,  
    minlength: 1,  
    maxlength: 100,  
  },  
  zip: {  
    type: String,  
    required: true,  
    minlength: 5,  
    maxlength: 10,  
    match: /^[0-9]+$/, // An example regex for a numeric ZIP code  
  },  
});  

const Address = mongoose.model('Address', addressSchema);  

export default Address;