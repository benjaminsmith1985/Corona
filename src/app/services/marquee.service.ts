import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MarqueeService {

  constructor(private http: HttpClient, private globals: Globals) { }

  getMarquees(): any {
    return this.http.get(`${this.globals.serverlink}getMarquees.php`);
  }
} 
