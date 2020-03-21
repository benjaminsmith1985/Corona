import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../../services/test.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-updatecase',
  templateUrl: './updatecase.component.html',
  styleUrls: ['./updatecase.component.less']
})
export class UpdatecaseComponent implements OnInit {
  updateCaseForm: FormGroup;

  constructor(
    private testService: TestService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateCaseForm = this.formBuilder.group({
      date: [''],
      tested: ['', Validators.required],
      negative: ['', Validators.required],
      positive: ['', Validators.required],
      unfinished: ['', Validators.required]
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
            this.router.navigate(['/home']);
            this.updateCaseForm.reset();
          }
        },
        (error: any) => {

        });
  }

}
