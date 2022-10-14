// const Request, Response, Nextfunction = require('express')
const express = require('express')
// import { Request, Response, NextFunction } from 'express';

module.exports = class jobPostingController {
    // getJobPostingList = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //     //   const userIds = Array.isArray(req.query.user_id) ? req.query.user_id as string[] : req.query.user_id as string;
    //       const district_name = req.params.district_name as string;
    //       let result = await this.redisService.smembersAsync(`district-${district_name}`);
    //       res.send(result);
    //     } catch (err) {
    //       if (err instanceof AriaError) {
    //         err.method = 'GET Sub District User';
    //         next(err);
    //       }
    //       if (err instanceof Error) {
    //           console.log(err)
    //         next({
    //           name: 'GET Sub District User Error',
    //           message: err.message,
    //           statusCode: 500
    //         });
    //       }
    //     }
    //   };
}