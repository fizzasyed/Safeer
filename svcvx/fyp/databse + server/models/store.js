const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Store = new mongoose.Schema({
    Userid:{},
    ConvoID:[]    
    
})
const store = mongoose.model('store', Store)

module.exports = store