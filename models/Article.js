const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema ({
	pseudo : String,
	contenu : String,
	date : Date,
	commentaires : [{
		type: Schema.Types.ObjectId,
		ref: "Commentaire"
	}]
});

const Article = mongoose.model('Article', articleSchema)
module.exports = Article;