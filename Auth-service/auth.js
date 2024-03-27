// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/login', async (req, res) => {
  const user = await User.findOne({ login: req.body.login });
  if (!user) return res.status(400).send('Utilisateur non trouvé.');

  const validPassword = await bcrypt.compare(req.body.mdp, user.mdp);
  if (!validPassword) return res.status(400).send('Mot de passe invalide.');

  const token = jwt.sign({ _id: user._id }, 'your_secret_key');
  res.header('auth-token', token).send(token);
});

module.exports = router;
