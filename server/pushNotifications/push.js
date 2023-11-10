/** Imports */
const fs = require('fs');
const vapid = require('./vapid.json');
const webpush = require('web-push');

/** The web push notifications */
webpush.setVapidDetails(
  'mailto:db@inser.ch',
  vapid.publicKey,
  vapid.privateKey
);

/** The subscriptions */
let subscriptions = require('./subs-db.json');

/**
 * Return the public key.
 */
getPublicKey = () => {
	return vapid.publicKey;
};

/**
 * Return the subscriptions.
 */
getSubscriptions = () => {
  return subscriptions;
}

/**
 * Save subscriptions.
 * 
 * @param subscription - The subscription.
 */
addSubscription = (subscription) => {
	subscriptions.push(subscription);
  fs.writeFileSync(`${ __dirname }/subs-db.json`, JSON.stringify(subscriptions));
};

/**
 * Send push notification.
 * 
 * @param notificationPayload - The push notification.
 */
sendPush = (notificationPayload) => {
  const notifications = [];

  subscriptions.forEach((subscription, i) => {
    const pushProm = webpush.sendNotification(subscription , JSON.stringify(notificationPayload))
      .then(console.log('Notification sent successfully.'))
      .catch( err => {
        if (err.statusCode === 410) {
          subscriptions[i].delete = true;
        }
      });
      notifications.push(pushProm);
  });

  Promise.all(notifications).then(() => {
		subscriptions = subscriptions.filter(subs => !subs.delete);
    fs.writeFileSync(`${ __dirname }/subs-db.json`, JSON.stringify(subscriptions));
  });
}

module.exports = {
  getPublicKey,
  getSubscriptions,
  addSubscription,
  sendPush
}