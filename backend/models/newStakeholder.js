const { default: mongoose } = require("mongoose");

const StakeholderSchema = new mongoose.Schema({

    name:String, 
    phone:String, 
    email:{
        unique:true,
        lowercase:true, 
        required: true,
        type:String
    }, 
    subject:String,
    message:String, 
    date: new Date()
})

const newStakeholder = mongoose.model("StakeholderSchema", StakeholderSchema)
module.exports = newStakeholder