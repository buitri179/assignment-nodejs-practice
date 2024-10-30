var express = require('express');
var router = express.Router();
const treeController = require('../controllers/tree-controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  treeController.getAll(req,res);
});

router.get('/create', function(req, res, next) {
  treeController.createTree(req, res);
});

router.post('/store', async function(req, res, next) {
  await treeController.storeTree(req, res);
});

module.exports = router;
