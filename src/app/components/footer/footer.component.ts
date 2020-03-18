import { Component, OnInit } from '@angular/core';
import { MarqueeService } from '../../services/marquee.service';
import { HeadlineService } from '../../services/headline.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  headline: any;
  marquees: any;

  constructor(
    private marqueeService: MarqueeService,
    private headlineService: HeadlineService
  ) { }

  ngOnInit() {
    this.getHeadline();
    this.loadMarquee();
  } 

  getHeadline() {
    this.headlineService.getHeadline()
      .subscribe(data => { 
        if(data){
          this.headline = data.data;
        }        
      });
  }

  loadMarquee() {
    this.marqueeService.getMarquees()
      .subscribe(data => { 
        if(data){
          this.marquees = data.data;
        }        
      });
  }

  // getMarqueeText(){
  //   this.marqueeText = "3de persoon met coronavirus geconstateerd, plek nog niet bekend | Alle KLM Vluchten naar curacao geanulleerd";
  // } 

}
