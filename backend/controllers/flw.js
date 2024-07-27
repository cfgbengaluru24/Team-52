import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendMail from "../middleware/sendMail.js";
import TryCatch from "../middleware/TryCatch.js";

//createBeneficiary, getAllBeneficiary, createApplication, getAllApplication, myProfile, updateAllApplication
