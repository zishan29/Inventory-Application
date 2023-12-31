const mongoose = require('mongoose');

const { Schema } = mongoose;

const ShirtSchema = new Schema({
  name: { type: String, required: true },
  imageURL: { type: String, required: true },
  price: { type: String, required: true },
  sizes: { type: Array, required: true },
  description: { type: String, required: true },
  fit: { type: Array, required: true },
});

ShirtSchema.virtual('url').get(function () {
  return `/shirts/${this.name}/${this._id}`;
});

module.exports = mongoose.model('Shirt', ShirtSchema);
