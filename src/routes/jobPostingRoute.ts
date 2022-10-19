import express from 'express';
import { Container } from 'typedi';
import { JobPostingController } from '../controllers/jobPostingController';
import "reflect-metadata";

const jobPostingController = Container.get(JobPostingController);
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Posting
 *   description: Posting Information service
 * definitions:
 *   Posting:
 *     type: object
 *     required:
 *       - posting_id
 *     properties:
 *       posting_id:
 *         type: string
 *         description: posting_id
 *       company_id:
 *         type: string
 *         description: company_id
 *       position:
 *         type: string
 *         description: position
 *       compensation:
 *         type: string
 *         description: compensation
 *       description:
 *         type: string
 *         description: description
 *       skill:
 *         type: string
 *         description: skill
 */

/**
 * @swagger
 * /jobPosting:
 *   get:
 *     summary: Returns list
 *     tags: [Posting]
 *     responses:
 *       200:
 *         description: user list
 *         schema:
 *           type: object
 *           properties:
 *             postings:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Posting'
 *   post:
 *     summary: register new information
 *     tags: [Posting]
 *     parameters:
 *       - name: Dept information
 *         in: body
 *         description: dept information
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Posting'
 *     responses:
 *       200:
 *         description: list
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Posting'
 *   patch:
 *     summary: update data
 *     tags: [Posting]
 *     parameters:
 *       - name: Posting Information
 *         in: body
 *         description: 채용 공고 수정
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Posting'
 *     responses:
 *       200:
 *         description: update complete
 *         schema:
 *           type: object
 *           properties:
 *             postings:
 *             type: object
 *             items:
 *              $ref: '#/definitions/Posting'
 */
// 1. 채용공고를 등록합니다. postJobPosting
// 2. 채용공고를 수정합니다. patchJobPosting
// 4. 채용공고 목록을 가져옵니다. getJobPostingList
router.route('/')
.get(jobPostingController.getJobPostingList)
.post(jobPostingController.postJobPosting)
.patch(jobPostingController.patchJobPosting)

// 3. 채용공고를 삭제합니다. deleteJobPosting
router.route('/:posting_id')
.delete(jobPostingController.deleteJobPosting)

// 4-2. 채용공고 검색 기능 구현(선택사항 및 가산점요소). getSearchedJobPostingList
router.route('/:company_name')
.get(jobPostingController.getSearchedJobPostingList)

// 5. 채용 상세 페이지를 가져옵니다. getDetailJobPostingList
router.route('/:posting_id/:company_id')
.get(jobPostingController.getDetailJobPostingList)

export default router;