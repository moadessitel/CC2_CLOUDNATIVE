/* routes */
const express = require('express');
const router = express.Router();
const Inscription = require('../models/Inscription');
const Evenement = require('../models/Evenement');
const User = require('../models/User');

router.post('/add', async (req, res) => {
  try {
    const user = await User.findById(req.body.utilisateur_id);
    if (!user) return res.status(400).send('Utilisateur non trouvé.');

    const evenement = await Evenement.findById(req.body.evenement_id);
    if (!evenement) return res.status(400).send('Événement non trouvé.');

    const inscription = new Inscription({
      utilisateur_id: req.body.utilisateur_id,
      evenement_id: req.body.evenement_id
    });
    await inscription.save();
    res.send(inscription);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
