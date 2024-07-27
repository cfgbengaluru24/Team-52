import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendMail from "../middleware/sendMail.js";
import TryCatch from "../middleware/TryCatch.js";
import Beneficiary from './model/Beneficiary';
import Application from './model/Application';


//createBeneficiary, getAllBeneficiary, createApplication, getAllApplication, myProfile, updateApplication




































































// export const getAllApplication = TryCatch(async (req, res) => {
//     const application = await Application.find();
//     res.json({ application });
// });


export const updateApplication = TryCatch(async (req, res) => {
    const { id, status } = req.body;
    const application = await Application.findById(id);
    application.status = status;
    await application.save();
    res.json({ message: "Application updated" });
});

export const getAllBeneficiary = TryCatch(async (req, res) => {

    // Find all applications with the given user ID
    const applications = await Application.find({ flw_id: req.user._id}).populate('beneficiary');

    // Extract unique beneficiaries from applications
    const beneficiaries = applications.map(app => app.beneficiary);
    const uniqueBeneficiaries = [...new Set(beneficiaries.map(ben => ben._id.toString()))]
        .map(id => beneficiaries.find(ben => ben._id.toString() === id));

    res.json(uniqueBeneficiaries);
});
