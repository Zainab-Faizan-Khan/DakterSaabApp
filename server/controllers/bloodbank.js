import BloodBank from "../models/BloodBank.js";

//Create
export const createBloodBank = async (req, res, next) => {
    const newBloodBank= new BloodBank(req.body)
    try{
       const savedBloodbank = await newBloodBank.save()
       res.status(200).json(savedBloodbank)
    }
    catch(err){
      next(err);
    }
  };
//Update
  export const updateBloodBank = async (req, res, next) => {
    try {
      const updatedBloodBank = await BloodBank.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedBloodBank);
    } catch (err) {
      next(err);
    }
  };
  //Delete
  export const deleteBloodBank = async (req, res, next) => {
    try {
      await BloodBank.findByIdAndDelete(req.params.id);
      res.status(200).json("BloodBank has been deleted.");
    } catch (err) {
      next(err);
    }
  };
//Get blood bank
  export const getBloodBank = async (req, res, next) => {
    try {
      const Blood= await BloodBank.findById(req.params.id);
      res.status(200).json(Blood);
    } catch (err) {
      next(err);
    }
  };
 //Get all blood Bank
  export const getBloodBanks = async (req, res, next) => {
    try {
      const BloodBanks = await BloodBank.find(req.query)
      res.status(200).json(BloodBanks);
    } catch (err) {
      next(err);
    }
  };

  export const findBlood = async (req, res, next) => {
    // console.log("aasa",req.query.bloodBank)
    let findbloods
    try {
      if(req.query.bloodBank){
         findbloods = await BloodBank.find({AvalibleBloodGroup:{"$in":req.query.bloodBank}} )

      }else{
         findbloods = await BloodBank.find({} )

      }
      // const findbloods = await BloodBank.find(req.query )
      res.status(200).json(findbloods);
    } catch (err) {
      next(err);
    }
  };


  

    