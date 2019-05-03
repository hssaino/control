import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';


@Injectable()
export class ServiceService{
  constructor(private http : HttpClient){

  }
  getServices():Observable<any>{
    return this.http.get(API_URLS.SERVICE_URL);
  }
  
 
  getEmpnoParServices(id: string): Observable<any> {
    return this.http.get(API_URLS.EMPLOYEBYSERVICE_URL, { params: new HttpParams().set('idS', id) });
  }

  CountEmpnoParServices(): Observable<any> {
    return this.http.get(API_URLS.CHART_URL);
  }

  getServiceById(id:string): Observable<any>{
    return this.http.get(API_URLS.SERVICEBYID_URL,{ params: new HttpParams().set('id', id) });
}
}