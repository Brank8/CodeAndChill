const Product = require("../models/product");

module.exports = {
  index,
  create,
  new: newProduct,
  show,
};

function newProduct(req, res) {
  res.render("products/new", { title: "Add Product", errorMsg: "" });
}

async function index(req, res) {
  try {
    const allProducts = await Product.find();
    res.render("products/index", {
      title: "All Products",
      products: allProducts,
    });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  console.log(req.body);
  try {
    const newProduct = await Product.create(req.body);
    // res.redirect("/flights/");
    res.redirect(`/products`);
  } catch (err) {
    res.render("products/new", { title: "Add Product", errorMsg: err.message });
  }
}

async function show(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    res.render("products/show", { title: "Product Detail", product });
  } catch (err) {
    res.redirect("/products");
  }
}
