const mongoose = require ('mongoose');

const amountSchema = new mongoose.Schema({

    id: Number,
    val: Number, 
    selected: Boolean 


})


const Amount = mongoose.model('Amount',amountSchema)

module.exports = Amount;