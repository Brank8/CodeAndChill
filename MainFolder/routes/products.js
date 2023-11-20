const express = require('express');
const router = express.Router();
const productsCtrl = require('../controllers/products')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/', productsCtrl.index)

// router.get("/new", productsCtrl.new);

// // router.post("/:id", productsCtrl.create);

// router.get("/show", productsCtrl.show);

// router.post('/products/:id/show', productsCtrl.create)

// router.post("/show", productsCtrl.create);

// router.get("/:id/show", productsCtrl.show);

router.get("/new", productsCtrl.new);

router.get("/:id", productsCtrl.show);

router.get("/", productsCtrl.index);

router.post("/", productsCtrl.create);



module.exports = router;
