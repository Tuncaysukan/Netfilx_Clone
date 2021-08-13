const mongoose = require('mongoose');

const ListSchema= new mongoose.Schema({
    title:{type:String,required, unique},
    type:{type:String},
    content:{type:Array},
    genre:{type:String},

},
{timestamps:true}
);

module.exports=mongoose.model('ListModel',ListSchema);