import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private apiService:ApiService) { }

  getAllMoreNews()
  {
   return this.apiService.get(`/News/GetMoreViews`);
  }

  getAllRecentNews()
  {
   return this.apiService.get(`/News/GetTopNews`);
  }
}
