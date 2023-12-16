const mongoose = require('mongoose');

const { Schema } = mongoose;

const ShoeSchema = new Schema({
  name: { type: String, required: true },
  imageURL: { type: String, required: true },
  price: { type: String, required: true },
  sizes: { type: Array, required: true },
  description: { type: String, required: true },
  fit: { type: Array, required: true },
});

ShoeSchema.virtual('url').get(function () {
  return `/shoes/${this.name}/${this._id}`;
});

module.exports = mongoose.model('Shoe', ShoeSchema);
