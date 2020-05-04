import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() type=1;
  constructor() { }

  ngOnInit(): void {
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
