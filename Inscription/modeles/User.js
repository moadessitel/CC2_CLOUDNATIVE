// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: int,
  Utilisateur_id: { type: String, unique: true },
  evenement_id: { type: String, unique: true },
});

module.exports = mongoose.model('User', userSchema);
