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

    getJobPostingList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = await this.jobPostingService.getListAsync();
            res.send(result);
        } catch (err) {
            if (err) {
                next(err);
                console.log(`getJobPostingList Err : ${err}`)
            }
        }
    };

    getSearchedJobPostingList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let company_name = req.params.company_name;
            let result = await this.jobPostingService.getSearchedListAsync(company_name);
            res.send(result);
        } catch (err) {
            if (err) {
                next(err);
                console.log(`getJobPostingList Err : ${err}`)
            }
        }
    };

    getDetailJobPostingList = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let posting_id = req.params.posting_id;
            let company_id = req.params.company_id;
            let result = await this.jobPostingService.getDetailPostingAsync(posting_id, company_id);
            res.send(result);
        } catch (err) {
            if (err) {
                next(err);
                console.log(`getJobPostingList Err : ${err}`)
            }
        }
    };

    postJobPosting = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const param = req.body;
            let result = await this.jobPostingService.postDataAsync(param);
            res.send(result);
        } catch (err) {
            if (err) {
                next(err);
                console.log(`postJobPosting Err : ${err}`)
            }
        }
    };

    patchJobPosting = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const param = req.body;
            let result = await this.jobPostingService.patchDataAsync(param);
            res.send(result);
        } catch (err) {
            if (err) {
                next(err);
                console.log(`patchJobPosting Err : ${err}`)
            }
        }
    };

    deleteJobPosting = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const param = req.params.posting_id;
            let result = await this.jobPostingService.deleteDataAsync(param);
            res.send(result);
        } catch (err) {
            if (err) {
                next(err);
                console.log(`patchJobPosting Err : ${err}`)
            }
        }
    };
}
