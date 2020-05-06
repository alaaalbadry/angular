import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarDaoService {

  constructor(private apiService: ApiService) { }

  getNavbarInformation() {
    return this.apiService.get(`/Department/GetMenu`);
  }

}
