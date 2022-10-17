// const express = require('express');
// const router = express.Router();
// const jobPostingController = require('../controllers/jobPostingController')

import express from 'express';
import { Container } from 'typedi';
import { JobPostingController } from '../controllers/jobPostingController';
const jobPostingController = Container.get(JobPostingController);

const router = express.Router();

router.route('/')
.get(jobPostingController.getJobPostingList)
// .post(jobPostingController.postJobPosting)

// router.route('/url/:search')
// .get(jobPostingController.getSearchedJobPostingList)

// module.exports = router;
export default router;