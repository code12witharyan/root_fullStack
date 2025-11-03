import mongoose from "mongoose"

const DoctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "HospitalRecord", required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    qualification: { type: String, required: true },
    experience: { type: Number, required: true },
},{ timestamps: true }) ;


export const DoctorRecord = mongoose.model("DoctorRecord", DoctorSchema) ;