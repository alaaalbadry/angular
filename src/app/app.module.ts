import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {HttpClientModule} from '@angular/common/http';
import { PieceOfNewsDetailsComponent } from './components/piece-of-news-details/piece-of-news-details.component';
import { NewsSmallPreviewComponent } from './components/news-small-preview/news-small-preview.component';
import { MaxLengthNewsPipe } from './pipes/max-length-news.pipe';
import { DepartmentNewsPageComponent } from './components/department-news-page/department-news-page.component';

@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent,
    NewsSmallPreviewComponent,
    PieceOfNewsDetailsComponent,
    MaxLengthNewsPipe,
    DepartmentNewsPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
