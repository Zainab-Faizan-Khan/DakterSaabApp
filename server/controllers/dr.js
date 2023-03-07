import Doctor from "../models/DoctorModel.js";

//Create
export const createDoctor = async (req, res, next) => {
    // console.log('aaaaaa')
  const newDoctor = new Doctor(req.body);
  try {
    const savedDoctor = await newDoctor.save();
    res.status(200).json(savedDoctor);
  } catch (err) {
    next(err);
  }
};

//Get all doctors
export const getDoctors = async (req, res, next) => {
  try {
    const Doctors = await Doctor.find(req.query);
    res.status(200).json(Doctors);
  } catch (err) {
    next(err);
  }
};

export const getRecommendation = async (req, res, next) => {
  try {
    const Doctors = await Doctor.find({ Ratings: { $gt: 3 }},);
    res.status(200).json(Doctors);
  } catch (err) {
    next(err);
  }
};

export const findDr = async (req, res, next) => {
  // console.log("aasa",req.query.bloodBank)
  let findDrs
  try {
    if(req.query.Dr){
       findDrs = await Doctor.find({ Speciality: { $regex: req.query.Dr} })
    }else{
       findDrs = await Doctor.find({} )

    }
    // const findbloods = await BloodBank.find(req.query )
    res.status(200).json(findDrs);
  } catch (err) {
    next(err);
  }
};


