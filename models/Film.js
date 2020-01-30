const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const filmSchema = new Schema({
    casting : [String],
    réalisateur : [String],
	dateDeSortie : Date,
	affiche: String,
	bandeAnnonce: String,
	synopsis: String,
	articles : [{
		type: Schema.Types.ObjectId,
		ref: "article"
	}]
}); 

module.exports = mongoose.model('Film', filmSchema);