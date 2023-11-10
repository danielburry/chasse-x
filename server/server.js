/** Imports */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// redirect to public directory
app.use(express.static(path.resolve(__dirname, '../public')));

// routes 
app.use('/api/form', require('./routes/form.routing'));
app.use('/api/notification', require('./routes/notification.routing'));
app.use('/api/pwa', require('./routes/pwa.routing'));
app.use('/api/user', require('./routes/user.routing'));

// redirect to index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Server run in port ${ port }`);
});