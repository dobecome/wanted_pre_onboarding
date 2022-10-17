// const express = require('express');
// const router = express.Router();
// const jobPostingRoute = require('./jobPostingRoute');

import express from 'express';
import jobPostingRoute from './jobPostingRoute';
const router = express.Router();

// // router.use('/company', companyRoute);
// // router.use('/user', userRoute);
router.use('/jobPosting', jobPostingRoute);
// // router.use('/applyHistory', applyHistoryRoute);

// module.exports = router;
export default router;