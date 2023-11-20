const express = require('express');
const router = express.Router();
const productsCtrl = require('../controllers/products')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', productsCtrl.index)




module.exports = router;
