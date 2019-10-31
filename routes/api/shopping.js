var express = require('express');
var router = express.Router();
var shoppingCtrl = require('../../controllers/api/shopping');

router.get('/', shoppingCtrl.index);
router.get('/:id', shoppingCtrl.show);
router.post('/', shoppingCtrl.create);
router.delete('/:id', shoppingCtrl.delete);
router.put('/:id', shoppingCtrl.update);

module.exports = router;