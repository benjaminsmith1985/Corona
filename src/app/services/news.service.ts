import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 
export class NewsService {

  constructor(
    private http: HttpClient,
    private globals: Globals
  ) { }
   

  getNews(): any { 
    return this.http.get(`${this.globals.serverlink}getNews.php`);
  }

  insert(data: any): any { 
    return this.http.post(`${this.globals.serverlink}/insertNews.php`, { data });
  }

  update(data: any): any { 
    return this.http.post(`${this.globals.serverlink}/updateNews.php`, { data });
  }

  getNewsById(newsId): any {
    return this.http.post(`${this.globals.serverlink}/getNewsById.php`, {newsId});
  }
}  
