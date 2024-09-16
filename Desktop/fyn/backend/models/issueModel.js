const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  vehicle_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Vehicle', 
    required: true 
},
  component_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Component', 
    required: true 
},
  repair_or_new: { 
    type: String, 
    required: true 
},
  price: { 
    type: Number, 
    required: true 
},
  created_at: { 
    type: Date, 
    default: Date.now 
}
});

module.exports = mongoose.model('Issue', issueSchema);
