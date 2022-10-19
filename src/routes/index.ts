import express from 'express';
import jobPostingRoute from './jobPostingRoute';
const router = express.Router();

// 공고 관련 서비스 route
router.use('/jobPosting', jobPostingRoute);

// router.use('/applyHistory', applyHistoryRoute);

export default router;