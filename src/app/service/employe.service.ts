

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
import { Employe } from '../shareed/employe';
@Injectable()
export class EmployeService {
  constructor(private http: HttpClient) {
  }
 
  addEmploye(employe: Employe): Observable<any> {
    console.log(employe);
    return this.http.post(API_URLS.EMPLOYE_URL, employe);
  }
  updateEmploye(employe: Employe): Observable<any> {
    return this.http.put(API_URLS.EMPLOYE_URL, employe);
  }
  deleteEmploye(id: number): Observable<any> {
  return this.http.delete(API_URLS.EMPLOYE_URL+`/${id}`);
    
  }

  getEmployes():Observable<any>{
    return this.http.get(API_URLS.EMPLOYE_URL);
  }
  
}
