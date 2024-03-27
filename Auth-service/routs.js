// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/add', async (req, res) => {
  try {
    const existingUser = await User.findOne({ $or: [{ email: req.body.email }, { login: req.body.login }] });
    if (existingUser) return res.status(400).send('L\'utilisateur existe déjà.');

    const user = new User({
      nom: req.body.nom,
      email: req.body.email,
      login: req.body.login,
      mdp: req.body.mdp
    });
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
/* users */
router.get('/check/:login', async (req, res) => {
    try {
      const user = await User.findOne({ login: req.params.login });
      if (!user) return res.status(404).send('Utilisateur non trouvé.');
  
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
