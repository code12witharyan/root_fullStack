import mongoose from "mongoose"

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    disease: { type: String, required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "DoctorRecord", required: true },
    hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "HospitalRecord", required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    bloodGroup: { type: String, required: true, enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
    gender: { type: String, required: true, enum:["male","female","other"] }
},{ timestamps: true }) ;


export const PatientRecord = mongoose.model("PatientRecord", PatientSchema) ;