import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})

export class MapService {

  constructor(
    private http: HttpClient,
    private globals: Globals) { }


  getDistrict(): any {
    return this.http.get(`${this.globals.serverlink}getDistricts.php`);
  }

  getActivities(districtId: any): any {
    return this.http.post(`${this.globals.serverlink}getMapActivities.php`, { districtId });
  }

} 
