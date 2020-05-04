import { ResponseViewDetailsItemTags } from 'src/app/model/responseViewDetailsItemTags.model';

export class ResponseViewDetails {
    ID: number;
    DepartmentID: number;
    Title:string;
    FacebookTitle: string;
    SubTitle: string;
    Desc:string;
    ImageTitle: string;
    ImagePath: string;
    URL: string;
    VideoURL: string;
    YouTubeVideoID: any;
    ShortURL: string;
    HashTags: string;
    ItemTags: ResponseViewDetailsItemTags[];
    ArabicDate: string;

}