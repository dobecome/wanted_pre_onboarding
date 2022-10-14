const express = require('express');
const router = express.Router();
const jobPostingController = require('../controllers/jobPostingController')

router.route('/')
// .get(jobPostingController.getJobPostingList)
// .post(jobPostingController.postJobPosting)

router.route('/url/:search')
// .get(jobPostingController.getSearchedJobPostingList)

