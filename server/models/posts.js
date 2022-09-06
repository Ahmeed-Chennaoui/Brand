const mongoose= require('mongoose');

const Posts = mongoose.Schema({
    email:{
        type: String,
        required : true,
        unique :true
    },
    title:{
        type: String,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    date:{
        type: Date,
        default: Date.now
    }
},
{timestamps: true});

module.exports = mongoose.model('Posts',Posts);