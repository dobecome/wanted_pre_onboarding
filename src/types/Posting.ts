
export default interface Posting {
    posting_id: string;
    company_id: string;
    position?: string;
    compensation?: string;
    description?: string;
    skill?: string;
    detail?: string;
    deleted?: boolean;
}

export { Posting }