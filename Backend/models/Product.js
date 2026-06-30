const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
  type: String,
  required: true,
},

brand: {
  type: String,
  required: true,
},

category: {
  type: String,
  required: true,
},

description: {
  type: String,
  required: true,
},

image: {
  type: String,
  required: true,
},

price: {
  type: Number,
  required: true,
},

countInStock: {
  type: Number,
  required: true,
},

sizes: [String],

colors: [String],

featured: {
  type: Boolean,
  default: false,
},

rating: {
  type: Number,
  default: 0,
},

numReviews: {
  type: Number,
  default: 0,
},
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Product",
  productSchema
);