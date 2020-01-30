const Commentaire = require('../models/Commentaire');

const commentaireController = {

    get: (req, res) => {
        Commentaire.findById(req.params.id, (err, commentaire) => {
            if (err) {
                res.send(err)
            }
            if (commentaire) {
                res.send(commentaire)
            }
        })
    }, 

    create:(req, res) => {
        const newCommentaire = new Commentaire(req.body);
        newCommentaire.save((err, savedCommentaire) => {
            if (err) {
                res.send(err)
            }
            if (savedCommentaire) {
                res.send(article)
            }
        })
    }, 


}

module.exports = commentaireController