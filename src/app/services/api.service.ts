import { ResponseView } from 'src/app/model/responseView.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient) { }

  post(url:string,body:any)
  {
    return this._httpClient.post(`${environment.apiURL}${url}`,body);
  }

  get(url:string)
  {
    return this._httpClient.get(`${environment.apiURL}${url}`).pipe(map((response:ResponseView)=>response));
  }

  put(url:string,body:any)
  {
    return this._httpClient.put(`${environment.apiURL}${url}`,body);
  }

  delete(url:string)
  {
    return this._httpClient.delete(`${environment.apiURL}${url}`);
  }
}
