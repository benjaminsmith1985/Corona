import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MarqueeService } from '../../services/marquee.service';
import { HeadlineService } from '../../services/headline.service';
import { Globals } from '../../globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  marquees: any;

  constructor(
    private marqueeService: MarqueeService,
    private headlineService: HeadlineService,
    public globals: Globals
  ) { }

  ngOnInit() {
    this.getHeadline();
    this.loadMarquee();
 
  } 

  onAudioPlay(){
    this.audioPlayerRef.nativeElement.play();
  }

  getHeadline() {
    this.headlineService.getHeadline()
      .subscribe(data => { 
        if(data){
          this.globals.headline = data.data;
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
}
