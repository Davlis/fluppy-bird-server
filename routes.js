const router = require('express').Router();
const statsRoutes = require('./routes/stats');

router.use('/stats', statsRoutes);

module.exports = router;
