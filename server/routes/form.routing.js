/** Imports */
var express = require('express');
var router = express.Router();

/** The table Form */
const dbForm = require('../database/Form');

/**
 * Get registres.
 */
router.get('/registres/:id', (req, res) => {
  const userId = req.params.id;
  const registres = dbForm.Registre.filter(item => item.userId === userId);
  res.json({ ok: true, registres });
});

/**
 * Save registre.
 */
router.post('/registre', (req, res) => {
  dbForm.Registre.push(req.body);
  res.json({ ok: true, registre: req.body });
});

module.exports = router;