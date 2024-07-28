import mongoose from "mongoose";

const SchemeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date_of_release: {
        type: Date,
        required: true,
    },
    govt_release: {
        type: String,
        required: true, // assuming this is the URL/path to the PDF file
    },
    link_to_application: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    documents_required: {
        type: [String],
        required: true,
    },
    criteria: {
        age_range: {
            min: {
                type: Number,
                required: false,
            },
            max: {
                type: Number,
                required: false,
            }
        },
        gender: {
            type: [String],
            required: false,
            enum: ['male', 'female', 'other']
        },
        income: {
            type: Number,
            required: false,
        },
        region: {
            type: [String],
            required: false,
        },
        category: {
            type: [String],
            required: false,
        },
        marital_status: {
            type: String,
            required: false,
            enum: ['single', 'married', 'widowed', 'divorced']
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Scheme = mongoose.model("Scheme", SchemeSchema);
export default Scheme;
