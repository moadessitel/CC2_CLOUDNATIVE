// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nom: String,
  email: { type: String, unique: true },
  login: { type: String, unique: true },
  mdp: String
});

module.exports = mongoose.model('User', userSchema);
