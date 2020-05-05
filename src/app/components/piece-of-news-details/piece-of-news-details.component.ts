import { ResponseViewDetails } from './../../model/responseViewDetails.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DaoService } from 'src/app/services/dao.service';

@Component({
  selector: 'piece-of-news-details',
  templateUrl: './piece-of-news-details.component.html',
  styleUrls: ['./piece-of-news-details.component.css']
})
export class PieceOfNewsDetailsComponent implements OnInit {

  newDetails:ResponseViewDetails;
  id: number = 0;
  isPageLoaded:boolean=false;

  constructor(private _activatedRoute: ActivatedRoute, private daoService: DaoService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = + params.get('id');
      this.getNewDetails(this.id);
    });
  }

  getNewDetails(newId: number) {
    this.daoService.getNewDetailsById(newId).subscribe((response) => {

      if (response.Success) {
        this.newDetails=response.Data;
        this.isPageLoaded=true;
      }
      else {
        alert(response.Message);
      }
    });


  }

}
