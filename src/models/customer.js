const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const customer = new mongoose.Schema({
    customerName :{
        type:String,
        required:true
    },
    preferName: {
        type:String,
        default:''       
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    bookings:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    }]
});

const model = mongoose.model('Customer', schema);

module.exports = model;