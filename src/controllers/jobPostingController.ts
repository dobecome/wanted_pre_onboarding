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
        console.log('controller log')
        try {
            const district_name = req.params.district_name as string;
              let result = await this.jobPostingService.getDataAsync('test');
              res.send(result);
        } catch (err) {
            if (err) {
                next(err);
            }
        }
    };
}
