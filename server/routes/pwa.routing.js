/** Imports */
var express = require('express');
var router = express.Router();

/** The table Code */
const dbCode = require('../database/Code');

/**
 * Get codes.
 */
router.get('/code/:codeName', (req, res) => {
  const codeName = req.params.codeName;
  const code = dbCode.find(item => item.codeName === codeName) || {};
  res.json({ ok: true, code: code.code });
});

module.exports = router;