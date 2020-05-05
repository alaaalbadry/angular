import { Component, OnInit, Input } from '@angular/core';
import { DaoService } from 'src/app/services/dao.service';
import { ResponseViewDetails } from './../../model/responseViewDetails.model';

@Component({
  selector: 'news-small-preview',
  templateUrl: './news-small-preview.component.html',
  styleUrls: ['./news-small-preview.component.css']
})
export class NewsSmallPreviewComponent implements OnInit {

  @Input()
  id: number;

  newsDetails:ResponseViewDetails = new ResponseViewDetails();

  constructor(private daoService: DaoService) { }

  ngOnInit(): void {

    this.getNewsDetails();

  }

  getNewsDetails(): void {

    this.daoService.getNewDetailsById(this.id).subscribe(response=>{

      this.newsDetails =  response.Data;

    });

  }

}
