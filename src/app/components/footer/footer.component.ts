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

  
  getHeadline() {
    this.headlineService.getHeadline()
      .subscribe(data => { 
        if(data){
          this.globals.headline = data.data;
        }        
      });
  }

  pause(){
    this.globals.player.pause();
  }

  play(){    
    this.globals.player.play();
  }

  stop(){
    this.globals.player.stop();
  }

  setAndPlay(medId){
    if(medId){
      this.globals.player.playerId = medId;
    }
    
    this.globals.player.setAndPlay(this.globals.player.src);
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
