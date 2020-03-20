import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-editnews',
  templateUrl: './editnews.component.html',
  styleUrls: ['./editnews.component.less']
})
export class EditnewsComponent implements OnInit {
  editNewsForm: FormGroup;
  newsItem: any;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.editNewsForm = this.formBuilder.group({
      newsId: ['', Validators.required],
      subject: ['', Validators.required],
      date: [''],
      text: ['', Validators.required],
      deleted: ['', Validators.required]
    });

    this.activatedRoute.params.subscribe(routeParams => {
      if (routeParams.newsId) {
        this.getNewsById(routeParams.newsId);
      }
    });
  }

  getNewsById(newsId) {
    var self = this;
    this.newsService.getNewsById(newsId)
      .subscribe(data => {
        if (data) {
          this.newsItem = data.data;
          self.setValue(data.data);
        }
      });
  }

  setValue(data): void {
    this.editNewsForm.setValue({
      newsId: data.newsId,
      subject: data.subject,
      date: data.date,
      text: data.text,
      deleted: data.deleted
    });
  }

  deleteNews(): void {
    this.editNewsForm.value.deleted = '1';
    this.updateNews();
  }

  updateNews(): void {    
    if (this.editNewsForm.invalid) {
      return;
    }

    this.newsService.update(this.editNewsForm.value)
      .pipe(first())
      .subscribe(
        (data: { updated: any; }) => {

        },
        (error: any) => {

        });
  }

}
