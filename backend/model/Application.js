import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  flw_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  beneficiary: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Beneficiary",
    required: true,
  },
  scheme: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Scheme",
    required: true,
  },
  application_status: {
    type: String,
    required: true,
    enum: [
      "Document submitted",
      "Document verification",
      "Scheme In progress",
      "Scheme done",
    ],
  },
  reference_token: {
    type: String,
    required: true,
  },
  docs_collected: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Application = mongoose.model("Application", ApplicationSchema);
export default Application;
