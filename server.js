const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config.js');
const routes = require('./routes');

app.use('/', routes);

mongoose.connect(config.mongo.url, { autoReconnect: true });

app.listen(3000, () => console.log('App listening on port 3000!'));
