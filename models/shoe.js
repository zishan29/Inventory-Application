const mongoose = require('mongoose');

const { Schema } = mongoose;

const ShoeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  price: { type: String, required: true },
  sizes: { type: Array, required: true },
  category: { type: String, required: true },
  details: { type: Array },
});

ShoeSchema.virtual('url').get(function () {
  return `/${this.category}/${this.name}/${this.description}/${this._id}`;
});

module.exports = mongoose.model('Shoe', ShoeSchema);
