import { Component, OnInit } from '@angular/core';
import { ResponseViewGetByDepartmentID } from 'src/app/model/responseViewGetByDepartmentID.model';
import { ActivatedRoute } from '@angular/router';
import { DepartmentPageService } from 'src/app/services/department-page.service';
import { PieceOfNews } from 'src/app/model/piece-of-news.model';

@Component({
  selector: 'department-news-page',
  templateUrl: './department-news-page.component.html',
  styleUrls: ['./department-news-page.component.css']
})
export class DepartmentNewsPageComponent implements OnInit {

  newsData: ResponseViewGetByDepartmentID;
  pageindex: number = 1;
  departmentID: number = 1;
  isPageLoaded: boolean = false;

  constructor(private dao: DepartmentPageService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.getParamaters();
    this.dao.getByDepartmentID(this.departmentID, this.pageindex).subscribe((response) => {

      if (response.Success) {
        this.newsData = response.Data;
        this.isPageLoaded = true;
      }
      else {
        alert(response.Message);
      }

    });

  }

  getParamaters(): void {

    this._activatedRoute.paramMap.subscribe(params => {
      this.pageindex = + params.get('index');
      this.departmentID = + params.get('id');
    });

  }


  getDataByID(departmentID: number, pageIndex: number) {

    this.dao.getByDepartmentID(departmentID, pageIndex).subscribe((response) => {

      if (response.Success) {
        this.newsData = response.Data;
        this.isPageLoaded = true;
      }
      else {
        alert(response.Message);
      }
    });

  }

}
