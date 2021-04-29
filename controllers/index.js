const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/', homeRoutes);
router.use('/dashboard', profileRoutes);
router.use('/api', apiRoutes);

module.exports = router;
