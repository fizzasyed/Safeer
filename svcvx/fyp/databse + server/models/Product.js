const mongoose = require('mongoose')

const Products = new mongoose.Schema({
    ConvoID:{
        unique:true,
        type: String
    }, 
    info:{
        Users: [],
        Messages: [
            {
                message: {
                    Userid: { type: String},
                    Messageid: { type: String},
                    Type:{
                            Text: { type: String},
                            Photo: { type: String},
                            Audio: { type: String}
                        },
                    Timestamp:{type:String}     
                    
                }
            }],
    }

}
)

const Product = mongoose.model('Product', Products)

// module.exports = Product
module.exports = Product