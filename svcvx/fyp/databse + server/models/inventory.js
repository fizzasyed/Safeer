const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Inventory = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
        // unique: true,
    },
    Username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        // lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    Number:{
        type: String,
        required: true,
        trim: true,
        // unique: true,
    },
    userid:{
        type:String,
        required:true,
        trim:true
    }
    

})


const Inven = mongoose.model('Inven', Inventory)

module.exports = Inven