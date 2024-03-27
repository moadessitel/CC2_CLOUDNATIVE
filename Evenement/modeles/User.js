// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: int,
  titre: { type: String, unique: true },
  description: { type: String, unique: true },
  date: { type: String, unique: true },
  lieu: { type: String, unique: true },
  categorie: { type: String, unique: true },
  
});

module.exports = mongoose.model('User', userSchema);
