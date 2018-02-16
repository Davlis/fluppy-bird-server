const router = require('express').Router();
const statsRoutes = require('./routes/stats');

router.use('/stats', statsRoutes);
router.use('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = router;
