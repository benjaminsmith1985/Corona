import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { Globals } from '../../globals';
import { first } from 'rxjs/operators';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  closeResult: any;

  @ViewChild('cropImageModal') cropImageModal: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private newsService: NewsService,
    private modalService: NgbModal,
    public globals: Globals
  ) { }

  ngOnInit() {
    this.insertNewsForm = this.formBuilder.group({
      subject: ['', Validators.required],
      date: [''],
      base64: [''],
      text: ['', Validators.required]
    });
  }

  insertNews(): void {
    if (this.insertNewsForm.invalid) {
      return;
    }

    this.insertNewsForm.value.base64;

    this.newsService.insert(this.insertNewsForm.value)
      .pipe(first())
      .subscribe(
        (data: { inserted: any; }) => {
          if (data.inserted) {
            this.getNewsItems();
            this.insertNewsForm.reset();
            this.resetImage();
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
    this.insertNewsForm.value.base64 = event.base64;
  }

  resetImage(){
    this.croppedImage = "";
    this.insertNewsForm.value.base64 = "";
    this.showCropper = false;
    this.imageChangedEvent = false;
  }

  imageLoaded() {
    // show cropper
    this.showCropper = true;
    // this.open(this.cropImageModal);
  }

  cropperReady() {

    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

  open(content: any) {
    this.modalService.open(content, { windowClass: 'dark-modal', ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
