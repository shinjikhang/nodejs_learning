const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name: { type: String, minLenght: 8, maxLenght: 128, default: 'Unnamed' },
  gender: { type: Number, min: 0, max: 1 },
  address: { type: String, match: /[a-z]/ },
  state: { type: Number, default: 1 },
  avatar: { type: String, default: 'https://cdn.pupi.vn/images/profile/avatar_default.png.webp' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', User);