import { Service } from 'typedi';

@Service('jobPostingService')
export class JobPostingService {
    getDataAsync = async (
        token: string
    ) => {
        console.log('service log')
        return null;
    }
}

// module.exports = class jobPostingService {
//     getJobPostingList = async (
//     ) => {
//         console.log('service log')
//     }
// }