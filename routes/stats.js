const router = require('express').Router();
const statsController = require('../controllers/stats.js');

router
    .get('/', (req, res) => statsController.getStats(req, res))
    .post('/', (req, res) => statsController.createStat(req, res));

module.exports = router;
