var express = require('express');
var router = express.Router();
const characterController = require('../controllers/characterController')

router.get('/', characterController.getAll);
router.get('/:id', characterController.getById);
router.post('/', characterController.add);
router.put('/:id', characterController.update);
router.delete('/:id', characterController.delete);

module.exports = router;
