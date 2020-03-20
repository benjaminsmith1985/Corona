import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-newsitems',
  templateUrl: './newsitems.component.html',
  styleUrls: ['./newsitems.component.less']
})
export class NewsitemsComponent implements OnInit {
  newsItem: any;

  constructor(
    public authenticationService: AuthenticationService,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.getNewsItems()
  }

  getNewsItems() {
    this.newsService.getNews()
      .subscribe(data => {
        if (data) {
          this.newsItem = data.data;
        }
      });
  }

}
