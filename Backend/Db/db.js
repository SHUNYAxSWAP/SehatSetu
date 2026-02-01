const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const Client = new Schema ({
    name: String,
    email: String,
    password: String,
    phone: Number,
    age: Number,
    height: String,
    weight:String,
    gender: String,
    disease:[String],
    location: {
        state: String,
        city: String,
        pincode:String
    }
})

const Doctor = new Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    specialization: [String],
    experience: Number,
    location: {
        state: String,
        city: String,
        pincode : String
    },
    availiability: {
        day: String,
        start: String,
        end: String
    },
    verified: Boolean,
    createdAt: String
})

const ClientModel = mongoose.model("Client",Client)
const DoctorModel = mongoose.model("Doctor", Doctor)

module.exports = {
    ClientModel ,
    DoctorModel 
}