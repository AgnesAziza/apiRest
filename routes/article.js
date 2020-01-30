const express = require('express');
const router = express.Router();
const articles = require ('../controllers/article');

router.use('/articles', articles.getAll)
router.post('/articles', articles.create)
router.get('/articles/:id', articles.get)
router.put('/articles/:id', articles.update)
router.delete('/articles/:id', articles.delete)


module.exports = router;


