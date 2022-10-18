import { Service } from 'typedi';
import Models from '../models/index';
import { v4 as uuidv4 } from 'uuid';
import Posting from '../types/Posting';
import { Op } from "sequelize";

const {
    Posting: PostingModel,
    Company: CompanyModel,
} = Models;

@Service('jobPostingService')
export class JobPostingService {
    getListAsync = async () => {
        let list = await PostingModel.findAll({
            attributes: ['posting_id', 'company_id', 'position', 'compensation', 'description', 'skill'],
            include: [
                {
                    model: CompanyModel,
                    attributes: ['name', 'country', 'city'],
                    // where: {
                    //     company_id : 'c1'
                    // }
                }
            ]
        });
        return list;
    }

    getSearchedListAsync = async (search: string) => {
        let list = await PostingModel.findAll({
            attributes: ['posting_id', 'company_id', 'position', 'compensation', 'description', 'skill'],
            where: {
                position: {
                    [Op.like]: '%' + search + '%',
                }
            },
            include: [
                {
                    model: CompanyModel,
                    attributes: ['name', 'country', 'city'],
                    where: {
                        name: {
                            [Op.like]: '%' + search + '%',
                        }
                    }
                }
            ]
        });
        return list;
    }

    getDetailPostingAsync = async (posting_id: string, company_id: string) => {
        let list = await PostingModel.findAll({
            attributes: ['posting_id', 'company_id', 'position', 'compensation', 'description', 'skill'],
            include: [
                {
                    model: CompanyModel,
                    attributes: ['name', 'country', 'city'],
                },
                {
                    model: PostingModel,
                    attributes:['posting_id'],
                    where:{
                        company_id: company_id
                    }
                }
            ]
        });
        return list;
    }

    postDataAsync = async (param: Posting) => {
        return await PostingModel.create({
            posting_id: uuidv4(),
            company_id: param.company_id,
            position: param.position,
            compensation: param.compensation,
            description: param.description,
            skill: param.skill,
            deleted: false,
        })
    }

    patchDataAsync = async (param: Posting) => {
        let result = await PostingModel.findOne({
            where: {
                posting_id: param.posting_id
            }
        })
        if (result) {
            let flag = false;
            if (result.position !== param.position) {
                result.position = param.position;
                flag = true;
            }
            if (result.compensation !== param.compensation) {
                result.compensation = param.compensation;
                flag = true;
            }
            if (result.description !== param.description) {
                result.description = param.description;
                flag = true;
            }
            if (result.skill !== param.skill) {
                result.skill = param.skill;
                flag = true;
            }
            if (flag) {
                await PostingModel.update(result, {
                    where: {
                        posting_id: param.posting_id
                    }
                })
            }
            return result;
        } else {
            return null;
        }
    }

    deleteDataAsync = async (id: string) => {
        try {
            // 실제 데이터를 삭제하지 않고 deleted true 처리
            await PostingModel.update({
                deleted: true
            }, {
                where: {
                    posting_id: id
                }
            })
        } catch (err) {
            throw err;
        }
    }
}
