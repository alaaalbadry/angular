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
  MoreNews:string[]=[];
  RecentNews:string[]=[];
  news:PieceOfNews[]=[];
  constructor(private sidebarService:SidebarService) { }

  ngOnInit(): void {
    this.setNewsType();
  }

  setNewsType():any{
    if(this.type===1){
      this.sidebarService.getAllRecentNews().subscribe(response=>{
      
        let responseView:ResponseView=new ResponseView();
        responseView=response as ResponseView;
        
        if(responseView.Success)
        {
          this.news=responseView.Data;
        }
       // this.isPageLoaded=true;
     },error=>{
       alert("sorry error");
     });
    //   this.RecentNews.push("الخبر الاول");
    //   this.RecentNews.push("الخبر الثاني ");
    //   this.RecentNews.push("الخبر الثالث");
    //  // this.news=this.RecentNews;
      
    }else
    {
      this.sidebarService.getAllMoreNews().subscribe(response=>{
      
        let responseView:ResponseView=new ResponseView();
        responseView=response as ResponseView;
        
        if(responseView.Success)
        {
          this.news=responseView.Data;
        }
       // this.isPageLoaded=true;
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
