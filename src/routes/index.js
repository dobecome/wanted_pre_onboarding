const express = require('express');
const router = express.Router();
const jobPostingRoute = require('./jobPostingRoute');

// router.use('/company', companyRoute);
// router.use('/user', userRoute);
router.use('/jobPosting', jobPostingRoute);
// router.use('/applyHistory', applyHistoryRoute);

module.exports = router;