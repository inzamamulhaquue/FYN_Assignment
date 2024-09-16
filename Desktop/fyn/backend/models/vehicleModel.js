const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  type: { 
    type: String, 
    required: true 
},
  price: { 
    type: Number, 
    required: true 
},
  is_new: { 
    type: Boolean, 
    required: true 

},
  created_at: { 
    type: Date, 
    default: Date.now 
}
});

module.exports = mongoose.model('Vehicle', componentSchema);
