import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeadlineService } from '../../services/headline.service';
import { NewsService } from '../../services/news.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  headlineForm: FormGroup;
  insertNewsForm: FormGroup;

  constructor(
    private headlineService: HeadlineService,
    private newsService: NewsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.headlineForm = this.formBuilder.group({
      text: ['', Validators.required]
    });

    this.insertNewsForm = this.formBuilder.group({
      subject: ['', Validators.required],
      date: [''],
      text: ['', Validators.required]
    }); 
  }


// ngAfterContentInit()


  updateHeader(): void {
    if (this.headlineForm.invalid) {
      return;
    }

    this.headlineService.update(this.headlineForm.value)
      .pipe(first())
      .subscribe(
        (data: { updated: any; }) => {
          if (data.updated) {
            this.headlineForm.reset();
            // this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
            //   this.router.navigate(['/dashboard']);
            // });
          }
        },
        (error: any) => {

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
            this.insertNewsForm.reset();
          }
        },
        (error: any) => {

        });
  }

}
