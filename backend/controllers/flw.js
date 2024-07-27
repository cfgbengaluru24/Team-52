import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendMail from "../middleware/sendMail.js";
import TryCatch from "../middleware/TryCatch.js";
import Beneficiary from "../model/Beneficiary.js";
import Application from "../model/Application.js;";

//createBeneficiary, getAllBeneficiary, createApplication, getAllApplication, myProfile, updateAllApplication
export const createBeneficiary = TryCatch(async (req, res) => {
  const {
    name,
    phone_no,
    aadhar_no,
    gender,
    category,
    income,
    marital_status,
    region,
  } = req.body;

  //const image=req.file;

  await Beneficiary.create({
    name,
    phone_no,
    aadhar_no,
    gender,
    category,
    income,
    marital_status,
    region,
  });
  res.status(201).json({
    message: "Beneficiary created successfully",
  });
});

export const createApplication = TryCatch(async (req, res) => {
  const {
    aadhar_no: aadhar_no1,
    application_status,
    reference_token,
    docs_collected,
  } = req.body;
  const beneficiary = Beneficiary.find({ aadhar_no: aadhar_no1 });
  const flw_id = req.user._id;

  //const image=req.file;

  await Application.create({
    flw_id,
    beneficiary,
    application_status,
    reference_token,
    docs_collected,
  });
  res.status(201).json({
    message: "Beneficiary created successfully",
  });
});
