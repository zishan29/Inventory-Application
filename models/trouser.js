const mongoose = require('mongoose');

const { Schema } = mongoose;

const TrouserSchema = new Schema({
  name: { type: String, required: true },
  imageURL: { type: String, required: true },
  price: { type: String, required: true },
  sizes: { type: Array, required: true },
  description: { type: String, required: true },
  fit: { type: Array, required: true },
});

TrouserSchema.virtual('url').get(function () {
  return `/trousers/${this.name}/${this.description}/${this._id}`;
});

module.exports = mongoose.model('Trouser', TrouserSchema);
