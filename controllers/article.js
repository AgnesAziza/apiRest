const Article = require('../models/Article');

const articleController = {

    getAll: (req, res) => {
        Article.find({}, (err, articles) => {
            if (err) {
                res.send(err)
            }
            if (articles) {
                res.send(articles)
            }

        })
    },

    get: (req, res) => {
        Article.findById(req.params.id, (err, article) => {
            if (err) {
                res.send(err)
            }
            if (article) {
                res.send(article)
            }
        })
    }, 

    create:(req, res) => {
        const newArticle = new Article(req.body);
        newArticle.save((err, savedArticle) => {
            if (err) {
                res.send(err)
            }
            if (savedArticle) {
                res.send(article)
            }
        })
    }, 

    update : (req, res) => {
        Article.findOneAndUpdate(
            req.body.articleToUpdate,
            req.body.update,
            { new: true },
            function(err, result) {
                if (err) {
                    res.send(err);
                }
                if (result) {
                    res.send(result);
                }
            }
        )
    }, 

    delete: (req, res) => {
        Article.findByIdAndRemove(req.params.id, (err, article) => {
            if (err) {
                res.send(err);
            }
            if (article) {
                res.send(article);
            }
        })
    }

}

module.exports = articleController
