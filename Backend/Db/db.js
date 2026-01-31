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
const ClientModel = mongoose.model("Client",Client)

module.exports = {
    ClientModel : ClientModel
}