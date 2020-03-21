import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Globals } from '../../globals';

@Component({
  selector: 'app-newsitems',
  templateUrl: './newsitems.component.html',
  styleUrls: ['./newsitems.component.less']
})
export class NewsitemsComponent implements OnInit {
  

  constructor(
    public authenticationService: AuthenticationService,
    private newsService: NewsService,
    public globals: Globals
  ) { }

  ngOnInit() {
    this.getNewsItems()
  }

  getNewsItems() {
    this.newsService.getNews()
      .subscribe(data => {
        if (data) {
          this.globals.newsItem = data.data;
        }
      });
  }

}
