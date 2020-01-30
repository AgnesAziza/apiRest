const express = require('express');
const router = express.Router();
const films = require ('../controllers/film');

router.use('/films', films.getAll)
router.post('/films', films.create)
router.get('/film/:id', films.get)
router.put('/film/:id', films.update)
router.delete('/film/:id', films.delete)


module.exports = router;
