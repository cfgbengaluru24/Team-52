import mongoose from "mongoose";

const BeneficiarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone_no: {
        type: String,
        required: true,
    },
    aadhar_no: {
        type: String,
        required: true,
        length: 12
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    },
    category: {
        type: String,
        required: true,
    },
    income: {
        type: Number,
        required: true,
    },
    marital_status: {
        type: String,
        required: true,
        enum: ['single', 'married', 'widowed', 'divorced']
    },
    region: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Beneficiary = mongoose.model("Beneficiary", BeneficiarySchema);
export default Beneficiary;