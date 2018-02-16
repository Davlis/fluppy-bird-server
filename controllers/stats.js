const Stats = require('../models/stats.js');

module.exports = new class StatsController {
    constructor() {
    }

    async getStats(req, res) {
        const result = await Stats.find();
        res.send(result);
    }

    async createStat(req, res) {
        res.send('Not implemented')
    }
}();
