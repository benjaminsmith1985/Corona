import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeadlineService } from '../../services/headline.service';
import { Globals } from '../../globals';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-updateheadline',
  templateUrl: './updateheadline.component.html',
  styleUrls: ['./updateheadline.component.less']
})
export class UpdateheadlineComponent implements OnInit {
  headlineForm: FormGroup;

  constructor(
    private headlineService: HeadlineService,
    private formBuilder: FormBuilder,
    public globals: Globals
  ) { }

  ngOnInit() {
    this.headlineForm = this.formBuilder.group({
      text: ['', Validators.required]
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
            this.getHeadline();
            this.headlineForm.reset();
          }
        },
        (error: any) => {

        });
  }

  getHeadline() {
    this.headlineService.getHeadline()
      .subscribe(data => { 
        if(data){
          this.globals.headline = data.data;
        }        
      });
  }


}
