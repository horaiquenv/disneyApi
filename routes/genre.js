var express = require('express');
var router = express.Router();
const genreController = require('../controllers/genreController');

router.get('/', genreController.getAll);
router.get('/:id', genreController.getById);
router.post('/', genreController.add);
router.put('/:id', genreController.update);
router.delete('/:id', genreController.delete)

module.exports = router;
