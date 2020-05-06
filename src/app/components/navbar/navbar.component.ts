import { Component, OnInit } from '@angular/core';
import { NavbarDaoService } from 'src/app/services/navbar-dao.service';
import { NavbarResponseView } from 'src/app/model/navbar-response-view.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarData:NavbarResponseView[];

  constructor(private dao: NavbarDaoService) { }

  get mainMenu(){

    return this.navbarData.filter(element=>element.ShowInMainMenu==true);

  }

  ngOnInit(): void {

    this.getData();

  }

  getData(): void {

    this.dao.getNavbarInformation().subscribe((response) => {

      if (response.Success) {
        this.navbarData=response.Data;
      }
      else {
        alert(response.Message);
      }
    });

  }

}
