
const express = require('express');
const router = express.Router();
const Evenement = require('../models/Evenement');

router.post('/add', async (req, res) => {
  try {
    const existingEvent = await Evenement.findOne({ titre: req.body.titre });
    if (existingEvent) return res.status(400).send('L\'événement existe déjà.');

    const evenement = new Evenement({
      titre: req.body.titre,
      description: req.body.description,
      date: req.body.date,
      lieu: req.body.lieu,
      categorie: req.body.categorie
    });
    await evenement.save();
    res.send(evenement);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

router.get('/:id', async (req, res) => {
    try {
      const evenement = await Evenement.findById(req.params.id);
      if (!evenement) return res.status(404).send('Événement non trouvé.');
  
      res.send(evenement);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  