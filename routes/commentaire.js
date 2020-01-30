const express = require('express');
const router = express.Router();
const commentaire = require ('../controllers/commentaire');

router.post('/commentaires', commentaire.create)
router.get('/commentaires/:id', commentaire.get)


module.exports = router;
 
