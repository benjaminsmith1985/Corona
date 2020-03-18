import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
  
export class ChartService {

  private link: String = "coronaServer/"

  constructor(
    private http: HttpClient,
    private globals: Globals
    ) { }

  
  getDatas():any {  
    return this.http.get(`${this.globals.serverlink}getChartData.php`);
  } 
}  
