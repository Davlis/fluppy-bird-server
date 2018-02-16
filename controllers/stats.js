const Stats = require('../models/stats.js');

module.exports = new class StatsController {
    constructor() {
    }

    async getStats(req, res) {
        try {
            const result = await Stats.find();
            res.json({ result });
        } catch(err) {
            res.status(500).json({err: err.message });
        }
    }

    async createStat(req, res) {
        try {
            const body = req.body;

            const nickname = body.nickname,
                score = body.score;
           
            const result = await Stats.create({
                nickname,
                score,
            });

            res.json({ result });
        } catch(err) {
            res.status(500).json({ err: err.message });
        }
    }
}();
