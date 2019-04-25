import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileserviceService {
 
  constructor(private http:HttpClient) { }
  getMobileDetails()
  {
    return this.http.get('assets/mobile.json')
  }

}