import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-newsitems',
  templateUrl: './newsitems.component.html',
  styleUrls: ['./newsitems.component.less']
})
export class NewsitemsComponent implements OnInit {
  newsItem: any;

  constructor(
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
