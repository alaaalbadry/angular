import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieceOfNewsDetailsComponent } from './components/piece-of-news-details/piece-of-news-details.component';


const routes: Routes = [
  {path:'details/:id',component:PieceOfNewsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
