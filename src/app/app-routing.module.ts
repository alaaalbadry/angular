import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieceOfNewsDetailsComponent } from './components/piece-of-news-details/piece-of-news-details.component';
import { DepartmentNewsPageComponent } from './components/department-news-page/department-news-page.component';


const routes: Routes = [
  {path:'details/:id',component:PieceOfNewsDetailsComponent},
  {path:'departmentNews/:id/:index',component:DepartmentNewsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
