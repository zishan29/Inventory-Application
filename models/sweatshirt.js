const mongoose = require('mongoose');

const { Schema } = mongoose;

const SweatshirtSchema = new Schema({
  name: { type: String, required: true },
  imageURL: { type: String, required: true },
  price: { type: String, required: true },
  sizes: { type: Array, required: true },
  description: { type: String, required: true },
  fit: { type: Array, required: true },
});

SweatshirtSchema.virtual('url').get(function () {
  return `/sweatshirts/${this.name}/${this._id}`;
});

module.exports = mongoose.model('Sweatshirt', SweatshirtSchema);
