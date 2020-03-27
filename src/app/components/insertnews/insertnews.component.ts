import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { Globals } from '../../globals';
import { first } from 'rxjs/operators';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-insertnews',
  templateUrl: './insertnews.component.html',
  styleUrls: ['./insertnews.component.less']
})
export class InsertnewsComponent implements OnInit {
  insertNewsForm: FormGroup;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper: any = false;

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

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  
  }

  imageLoaded() {
    // show cropper
    this.showCropper = true;
    console.log('show');
  }

  cropperReady() {
  
    // cropper ready
  }
  
  loadImageFailed() {
    // show message
  }

}
