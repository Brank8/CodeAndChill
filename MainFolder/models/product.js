const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  meals: {
    type: String,
    enum: ["Pizza", "Mac&Cheese", "Cheeseburger", "Salad", "Chicken Soup"],
    required: true,
  },
  vegetables: {
    type: String,
    enum: ["Not selected", "Tomatoes", "Onions", "Cucumbers", "Carrots", "Lettuce"],
  },
  kitchenware: {
    type: String,
    enum: ["Not selected", "Kitchen knife", "10-set spoons", "10-set plates", "20pcs cups"],
  },
  bread: {
    type: String,
    enum: ["Not selected", "Wheat", "Toast", "French", "Burger buns"],
  },
});

module.exports = mongoose.model("Product", productSchema);
