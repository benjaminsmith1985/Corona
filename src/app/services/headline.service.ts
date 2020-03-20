import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})

export class HeadlineService {

  constructor(
    private http: HttpClient,
    private globals: Globals) { }


  getHeadline(): any {
    return this.http.get(`${this.globals.serverlink}getHeadline.php`);
  }

  update(data: any): any {
    return this.http.post(`${this.globals.serverlink}updateHeadline.php`, { data });
  }
} 
