import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  private link: String = "http://localhost/coronaServer";

  constructor(private http: HttpClient) { }

  
  getNews():any {
    return this.http.get(`${this.link}/getNews`);
  }
}  
