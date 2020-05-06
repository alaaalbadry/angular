import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { ResponseViewDeptHomeNews } from 'src/app/model/responseViewDeptHomeNews.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsOfDepartments:ResponseViewDeptHomeNews[]=[];
  isPageLoaded:boolean=false;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
   
    this.homeService.getHomeDepartments().subscribe(response=>{
     
      if(response.Success)
      {
        this.newsOfDepartments = response.Data;
        this.isPageLoaded=true;
      }
     
   },error=>{
     alert("sorry error");
   });
  }

}
