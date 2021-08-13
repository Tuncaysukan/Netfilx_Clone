const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title:{type:String,required, unique},
    des:{type:String},
    img:{type:String},
    imgTitle:{type:String},
    imgSm:{type:String},
    trailer:{type:String},
    video:{type:String},
    year:{type:Number},
    genre:{type:String},
    isSeries:{type:Boolean,default:false}



}
,
{timestamps:true});
module.exports=mongoose.model('MovieModel',MovieSchema);