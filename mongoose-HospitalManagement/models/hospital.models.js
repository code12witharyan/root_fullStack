import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    website: { type: String },
    establishedYear: { type: Number, required: true },
    numberOfBeds: { type: Number, required: true },
    rating: { type: Number, min: 0, max: 5 },
    day: { type: String, required: true, enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
    open: { type: String, required: true }, // e.g., "09:00 AM"
    close: { type: String, required: true } // e.g., "05:00 PM"
}, { timestamps: true });   
export const HospitalRecord = mongoose.model("HospitalRecord", HospitalSchema);