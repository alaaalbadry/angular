import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() type=1;
  MoreNews:string[]=[];
  RecentNews:string[]=[];
  news:string[]=[];
  constructor() { }

  ngOnInit(): void {
    this.setNewsType();
  }

  setNewsType():any{
    if(this.type===1){
      this.RecentNews.push("الخبر الاول");
      this.RecentNews.push("الخبر الثاني ");
      this.RecentNews.push("الخبر الثالث");
      this.news=this.RecentNews;
      
    }else
    {
      this.MoreNews.push("الخبرالخامس");
      this.MoreNews.push("الخبر الرابع ");
      this.MoreNews.push("الخبر السادس");
      this.news=this.MoreNews;
      
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
