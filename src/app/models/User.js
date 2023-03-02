const mongoose = require('mongoose')
const mongoose_slug = require('mongoose-slug-generator');

mongoose.plugin(mongoose_slug);
const Schema = mongoose.Schema;

const User = new Schema({
  name: { type: String, minLenght: 8, maxLenght: 128, default: 'Unnamed', require: true },
  email: { type: String, unique: true, require: true },
  gender: { type: Number, min: 0, max: 1, require: true },
  address: { type: String, match: /[a-z]/ },
  state: { type: Number, default: 1 },
  avatar: { type: String, default: 'https://cdn.pupi.vn/images/profile/avatar_default.png.webp' },
  username: { type: String, slug: 'name', unique: true, slug_padding_size: 3 }
  // createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', User);