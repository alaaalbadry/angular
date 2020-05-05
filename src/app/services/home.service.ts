import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private apiService:ApiService) { }

  getHomeDepartments()
  {
   return this.apiService.get(`/Department/GetHomeDepartments`);
  }
}
