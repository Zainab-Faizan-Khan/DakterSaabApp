import mongoose from "mongoose";
const BloodBankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
 
  time: {
    type: String,

  },
  featured:{
      type:Boolean
  },
 AvalibleBloodGroup: {
  type: [String],
 }


});

export default mongoose.model("BloodBank", BloodBankSchema)