import mongoose from 'mongoose';
import {Schema} from 'mongoose';

const DoctorSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        index:true,
    },
    password :{
        type:String,
        required:true,
        select: false
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    specialization:{
        type:String,
        default:""
    },
    imgUrl: {
        type: String,
        default: null
    },
    imgPublicId: {
        type: String,
        default: null
    },
    experienceYears:{
        type:Number,
        default:0
    },
    qualification:{
        type:String,
        required:true
    },
    location:{
        type:String,
        default:""
    },
    about:{
        type:String,
        default:""
    },
    fee:{
        type:Number,
        default:0
    },
    availability:{
        type:String,
        enum:["Available","Not Available"],
        default:"Not Available"
    },
    schedule:{
        type: Map,
        of:[String],
        default:{}
    },
    success:{
        type:String,
        default:""
    },
    rating:{
        type:Number,
        default:0
    },
    patient:{
        type:String,
        default:""
    },
})
DoctorSchema.index({name:"text", specialization:"text"})

const Doctor = mongoose.model('Doctor', DoctorSchema)

export default Doctor
