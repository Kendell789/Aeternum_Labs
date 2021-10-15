const mongoose = require ('mongoose');

const matSchema = new mongoose.Schema({

    id: Number,
    resourceType: String, 
    selected: Boolean


})


const Mat = mongoose.model('Mat',matSchema)

module.exports = Mat;

