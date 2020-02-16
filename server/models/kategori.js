const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const kategoriSchema = new Schema({
    ad: String
});

module.exports = mongoose.model('Kategori',kategoriSchema);