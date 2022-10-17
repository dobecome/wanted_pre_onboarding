import Container, { Service, Inject } from 'typedi';
import { JobPostingService } from '../services/jobPostingService';
import { Request, Response, NextFunction } from 'express';

@Service()
export class JobPostingController {
    @Inject('jobPostingService')
    jobPostingService: JobPostingService;

    constructor() {
        this.jobPostingService = Container.get('jobPostingService');
    }

    //getSubDistrictUser
    getJobPostingList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const district_name = req.params.district_name as string;
              let result = null; //await this.redisService.smembersAsync(`district-${district_name}`);
              res.send(result);
        } catch (err) {
            if (err) {
                // err.method = 'GET Sub District User';
                next(err);
            }
        }
    };
}

// const express = require('express')
// const jobPostingService = require('../services/jobPostingService')
// import { Request, Response, NextFunction } from 'express';

// module.exports = class jobPostingController {
//     getJobPostingList = async (req, res, next) => {
//         try {
//             console.log('get list');
//             let result = jobPostingService.getJobPostingList();

//             res.send(result)
//             //     //   const userIds = Array.isArray(req.query.user_id) ? req.query.user_id as string[] : req.query.user_id as string;
//             //       const district_name = req.params.district_name as string;
//             //       let result = await this.redisService.smembersAsync(`district-${district_name}`);
//             //       res.send(result);
//         } catch (err) {
//             if (err) {
//                 // err.method = 'GET Sub District User';
//                 next(err);
//             }
//         }
//     };
// }