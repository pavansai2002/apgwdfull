const mongoose = require('mongoose');

const DistrictSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    value:{
        type:String,
        required:false
    },
    finalvalue:{
        type:String,
        required:false
    }
});

const District = mongoose.model('Ntr District',DistrictSchema);

module.exports = District;