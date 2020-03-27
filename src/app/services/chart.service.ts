import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
  
export class ChartService {

  constructor(
    private http: HttpClient,
    private globals: Globals
    ) { }
 
  
  getDatas():any {  
    return this.http.get(`${this.globals.serverlink}getCoronaUpdate.php`);
  } 

  insert(data: any): any { 
    return this.http.post(`${this.globals.serverlink}insertChart.php`, { data });
  }

  getInternationalData():any{
    return this.http.get(`${this.globals.serverlink}getCoronaIntStat.php`);
  }
}  
