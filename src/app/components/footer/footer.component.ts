import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  mainText: any;
  marqueeText: any;

  constructor() { }

  ngOnInit() {
    this.getMainText();
    this.getMarqueeText();
  }

  getMainText() {
    this.mainText = "Vanaf dinsdag 17 maart scholen gesloten, uitgezonderd groep FO-8, HAVO-5, VWO-6 EN VSBO-4";
  }

  getMarqueeText(){
    this.marqueeText = "3de persoon met coronavirus geconstateerd, plek nog niet bekend | Alle KLM Vluchten naar curacao geanulleerd";
  }

}
