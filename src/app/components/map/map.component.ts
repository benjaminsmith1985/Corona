import { Component,  ElementRef, ViewChild, OnInit } from '@angular/core';
import { Globals } from '../../globals';
import { MediaplayerService } from '../../services/mediaplayer.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  @ViewChild('audioPlayer') vid: ElementRef;

  constructor( 
    private globals: Globals
  ) { }

  ngOnInit() {
    this.globals.player = new MediaplayerService(this.vid.nativeElement);
  
  }

}
