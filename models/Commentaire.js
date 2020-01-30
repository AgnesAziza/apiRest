const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const commentaireSchema = new Schema({
    pseudo : String,
	contenu : String,
	date : Date
});

module.exports = mongoose.model('Commentaire', commentaireSchema);