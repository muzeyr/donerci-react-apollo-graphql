const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const urunSchema = new Schema({
    ad: String,
    kategoriId: String
});

module.exports = mongoose.model('Urun',urunSchema);