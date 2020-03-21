import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartService } from '../../services/chart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-updatechart',
  templateUrl: './updatechart.component.html',
  styleUrls: ['./updatechart.component.less']
})
export class UpdatechartComponent implements OnInit {
  insertChartForm: FormGroup;

  constructor(
    private chartService: ChartService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['/login']);
    }

    this.insertChartForm = this.formBuilder.group({
      date: [''],
      confirmed: ['', Validators.required],
      deaths: ['', Validators.required],
      recovered: ['', Validators.required]
    });
  }

  insertChart(): void {    
    if (this.insertChartForm.invalid) {
      return;
    }

    this.chartService.insert(this.insertChartForm.value)
      .pipe(first())
      .subscribe(
        (data: { inserted: any; }) => {
          if (data.inserted) {            
            this.router.navigate(['/home']);            
            this.insertChartForm.reset();
          }
        },
        (error: any) => {

        });
  }

}
