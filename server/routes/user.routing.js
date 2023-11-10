/** Imports */
const express = require('express');
const router = express.Router();

/** The table User */
const dbUser = require('../database/User');

/**
 * Login user.
 */
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // find user
  const user = dbUser.find(item => 
    item.username === username && 
    item.password === password
  );

  // response
  if (!user) {
    const msg = 'Vos données de connexion sont erronées. Veuillez réessayer.' 
    res.status(404).json({ ok: false, msg });
  } else {
    const userLogged = {...user};
    delete userLogged.password;
    res.json({ ok: true, user: userLogged });
  }
});

/**
 * Update user.
 */
 router.post('/update', (req, res) => {
  const { id } = req.body;

  // find user
  const user = dbUser.find(item => item.id = id);
  const userIndex = dbUser.indexOf(user);

  // response
  if (!user) {
    const msg = 'Utilisateur non trouvé.' 
    res.status(404).json({ ok: false, msg });
  } else {
    req.body.password = user.password;
    dbUser[userIndex] = req.body;
    const userUpdate = {...dbUser[userIndex]};
    delete userUpdate.password;  
    res.json({ ok: true, userUpdate });
  }
});

module.exports = router;