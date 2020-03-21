import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { Globals } from '../../globals';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-insertnews',
  templateUrl: './insertnews.component.html',
  styleUrls: ['./insertnews.component.less']
})
export class InsertnewsComponent implements OnInit {
  insertNewsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newsService: NewsService,
    public globals: Globals
  ) { }

  ngOnInit() {
    this.insertNewsForm = this.formBuilder.group({
      subject: ['', Validators.required],
      date: [''],
      text: ['', Validators.required]
    });
  }

  insertNews(): void {
    if (this.insertNewsForm.invalid) {
      return;
    }

    this.newsService.insert(this.insertNewsForm.value)
      .pipe(first())
      .subscribe(
        (data: { inserted: any; }) => {
          if (data.inserted) {
            this.getNewsItems();
            this.insertNewsForm.reset();
          }
        },
        (error: any) => {

        });
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
