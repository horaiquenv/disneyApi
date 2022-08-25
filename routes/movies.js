var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController')

router.get('/', moviesController.getAll);
router.get('/:id', moviesController.getById);
router.post('/', moviesController.add);
router.put('/:id', moviesController.update);
router.delete('/:id',moviesController.delete)

module.exports = router;