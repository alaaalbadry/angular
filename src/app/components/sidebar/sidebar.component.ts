import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {SidebarService} from 'src/app/services/sidebar.service';
import { ResponseView } from 'src/app/model/responseView.model';
import { PieceOfNews } from 'src/app/model/piece-of-news.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() type=1;
  news:PieceOfNews[]=[];
  isPageLoaded:boolean=false;
  constructor(private sidebarService:SidebarService) { }

  ngOnInit(): void {
    this.setNewsType();
  }

  setNewsType():any{
    if(this.type===1){
      this.sidebarService.getAllRecentNews().subscribe(response=>{
        
        if(response.Success)
        {
          this.news=response.Data;
          this.isPageLoaded=true;
        }
       
     },error=>{
       alert("sorry error");
     });
      
    }else
    {
      this.sidebarService.getAllMoreNews().subscribe(response=>{
        if(response.Success)
        {
          this.news=response.Data;
          this.isPageLoaded=true;
        }
     },error=>{
       alert("sorry error");
     });
      
    }
  }
  getNewsType():any{
    if(this.type===1){
      return "اضيف حديثا";
    }else
    {
      return "الاكثر قراءه";
    }
  }
}
