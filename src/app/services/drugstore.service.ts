import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})

export class DrugstoreService {

  constructor(
    private http: HttpClient,
    private globals: Globals
  ) { }

  getAll(): any {
    return this.http.post(`${this.globals.serverlink}getDrugStores.php`,{});
  }

  getByDistrictId(districtId: any): any {
    return this.http.post(`${this.globals.serverlink}getDrugStoresByDistrictId.php`, { districtId });
  }
}  
