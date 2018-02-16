const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config.js');
const routes = require('./routes');

app.use(bodyparser.json({ limit: '1mb' }));
app.use(bodyparser.urlencoded({ limit: '1mb', parameterLimit: 50000, extended: true }));
app.use(cors());
app.use('/', routes);

mongoose.connect(config.mongo.url, { autoReconnect: true });

app.listen(3000, () => console.log('App listening on port 3000!'));
