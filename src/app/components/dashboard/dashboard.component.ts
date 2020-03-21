import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeadlineService } from '../../services/headline.service';

import { TestService } from '../../services/test.service';
import { ChartService } from '../../services/chart.service';
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
  insertChartForm: FormGroup;
  updateCaseForm: FormGroup;

  constructor(
    private headlineService: HeadlineService,
  
    private chartService: ChartService,
    private testService: TestService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.headlineForm = this.formBuilder.group({
      text: ['', Validators.required]
    });   

    this.insertChartForm = this.formBuilder.group({
      date: [''],
      confirmed: ['', Validators.required],
      deaths: ['', Validators.required],
      recovered: ['', Validators.required]
    });

    this.updateCaseForm = this.formBuilder.group({
      date: [''], 
      tested: ['', Validators.required],
      negative: ['', Validators.required],
      positive: ['', Validators.required],
      unfinished: ['', Validators.required]
    });
  }

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
          }
        },
        (error: any) => {

        });
  }

  

  insertChart(): void {
    console.log('here we go');
    if (this.insertChartForm.invalid) {
      return;
    }

    this.chartService.insert(this.insertChartForm.value)
      .pipe(first())
      .subscribe(
        (data: { inserted: any; }) => {
          if (data.inserted) {
            this.insertChartForm.reset();
          }
        },
        (error: any) => {

        });
  }

  updateCase(): void {
    if (this.updateCaseForm.invalid) {
      return;
    }

    this.testService.update(this.updateCaseForm.value)
      .pipe(first())
      .subscribe(
        (data: { updated: any; }) => {
          if (data.updated) {
            this.updateCaseForm.reset();      
          }
        },
        (error: any) => {

        });
  }

}
