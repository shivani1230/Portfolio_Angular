import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})

export class DataserviceService {

  constructor(private http: HttpClient) { }

  getData(data:{}){
    console.log('In service',data);
    return this.http.post(`${baseUrl}/getForm`,data);
  }
}
