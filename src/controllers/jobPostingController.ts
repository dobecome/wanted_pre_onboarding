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

    // 1. 채용공고를 등록합니다. postJobPosting
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

    // 2. 채용공고를 수정합니다. patchJobPosting
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

    // 3. 채용공고를 삭제합니다. deleteJobPosting
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

    // 4. 채용공고 목록을 가져옵니다. getJobPostingList
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

    // 4-2. 채용공고 검색 기능 구현(선택사항 및 가산점요소). getSearchedJobPostingList
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

    // 5. 채용 상세 페이지를 가져옵니다. getDetailJobPostingList
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
}
