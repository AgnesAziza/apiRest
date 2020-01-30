const Film = require('../models/Film');

const filmController = {

    getAll: (req, res) => {
        Film.find({}, (err, films) => {
            if (err) {
                res.send(err)
            }
            if (films) {
                res.send(films)
            }

        })
    },

    get: (req, res) => {
        Film.findById(req.params.id, (err, film) => {
            if (err) {
                res.send(err)
            }
            if (film) {
                res.send(film)
            }
        })
    }, 

    create:(req, res) => {
        const newFilm = new Article(req.body);
        newFilm.save((err, savedFilm) => {
            if (err) {
                res.send(err)
            }
            if (savedFilm) {
                res.send(film)
            }
        })
    }, 

    update : (req, res) => {
        Film.findOneAndUpdate(
            req.body.filmToUpdate,
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
        Film.findByIdAndRemove(req.params.id, (err, film) => {
            if (err) {
                res.send(err);
            }
            if (film) {
                res.send(film);
            }
        })
    }

}

module.exports = filmController
