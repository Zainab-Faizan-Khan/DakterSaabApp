import express from "express";
import { createDoctor, findDr, getDoctors,getRecommendation } from "../controllers/dr.js";
// import BloodBank from "../models/BloodBank.js";
const router = express.Router();
//CREATE
router.post("/createdr",  createDoctor);
//GET ALL
router.get("/findDr", getDoctors);
router.get("/findRating",getRecommendation )
router.get("/find",findDr)
export default router;