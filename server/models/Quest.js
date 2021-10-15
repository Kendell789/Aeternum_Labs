const mongoose = require ('mongoose');

const questSchema = new mongoose.Schema({

        id:Number,
        text: String,
        resourceAmountReq: Number,
        resourceTypeReq: String


})


const Quest = mongoose.model('Quest',questSchema)

module.exports = Quest;
