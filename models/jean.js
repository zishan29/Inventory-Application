const mongoose = require('mongoose');

const { Schema } = mongoose;

const JeanSchema = new Schema({
  name: { type: String, required: true },
  imageURL: { type: String, required: true },
  price: { type: String, required: true },
  sizes: { type: Array, required: true },
  description: { type: String, required: true },
  fit: { type: Array, required: true },
});

JeanSchema.virtual('url').get(function () {
  return `/jeans/${this.name}/${this.description}/${this._id}`;
});

module.exports = mongoose.model('Jean', JeanSchema);
