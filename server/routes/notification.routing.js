
var express = require('express');
var router = express.Router();
var push = require('../pushNotifications/push')

/** The table Form */
const dbNotifications = require('../database/Notification');

/**
 * Get public key.
 */
router.get('/publicKey', (req, res) => {
  const publicKey = push.getPublicKey();
  res.json({ ok: true, publicKey });
});

/**
 * Get subscriptions.
 */
router.get('/subscriptions', (req, res) => {
  const subscriptions = push.getSubscriptions();
  res.json({ ok: true, subscriptions });
});

/**
 * Save subscription.
 */
router.post('/subscribe', (req, res) => {
  const subscription = req.body;
  push.addSubscription(subscription)
  res.json({ ok: true });
});


/**
 * Get push notifications.
 */
router.get('/notifications/:id', (req, res) => {
  const userId = req.params.id;
  const notifications = dbNotifications.filter(item => item.data.userId === userId);
  res.json({ ok: true, notifications: notifications });
});

/**
 * Save push notification.
 */
router.post('/notification', (req, res) => {
  const notify = req.body ;
  dbNotifications.push(notify);
  res.json({ ok: true, notify });
});

/**
 * Send push notification.
 */
router.post('/push', (req, res) => {
  const notificationPayload = { notification: req.body };
  push.sendPush(notificationPayload);
  res.json({ ok: true, notification: JSON.stringify(notificationPayload) });
});

module.exports = router;