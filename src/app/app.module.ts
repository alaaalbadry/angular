import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PieceOfNewsDetailsComponent } from './components/piece-of-news-details/piece-of-news-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PieceOfNewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
