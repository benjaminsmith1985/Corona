import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MapService {

  private link: String = "http://localhost/coronaServer";

  constructor(private http: HttpClient) { }

  
  getDistrict():any {
    return this.http.get(`${this.link}/getDistricts`);
  }
} 
