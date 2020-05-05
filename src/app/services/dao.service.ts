import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  constructor(private apiService: ApiService) { }

  getNewDetailsById(newId: number) {
    return this.apiService.get(`/News/GetDetails?id=` + newId);
  }

}
