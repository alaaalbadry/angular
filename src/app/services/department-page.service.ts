import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentPageService {

  constructor(private apiService: ApiService) { }

  getByDepartmentID(departmentID: number, pageIndex: number) {
    return this.apiService.get('/News/GetByDepartmentID?' +
      'departmentID=' + departmentID + '&pageIndex=' + pageIndex);
  }

}
