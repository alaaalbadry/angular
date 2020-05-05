import { PieceOfNews } from './piece-of-news.model';

export class ResponseViewGetByDepartmentID {

    PageSize:number;
    PageIndex:number;
    Records:number;
    Pages:number;
    Result:PieceOfNews[];

}