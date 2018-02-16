const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config.js');
const routes = require('./routes');

app.use(morgan('dev'));
app.use(bodyparser.json({ limit: '1mb' }));
app.use(bodyparser.urlencoded({ limit: '1mb', parameterLimit: 50000, extended: true }));
app.use(cors());
app.use('/', routes);

mongoose.connect(config.mongo.url, { autoReconnect: true });

app.listen(config.server.port, () => console.log(`App listening on port ${config.server.port}!`));
