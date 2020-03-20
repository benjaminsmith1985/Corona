import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  districts: any;

  constructor(
    private mapService: MapService
  ) { }

  ngOnInit() {   
    this.loadMap();
  } 

  set(d) {
     console.log(d.ID);
  }  

 
  loadMap() {
    this.mapService.getDistrict()
      .subscribe(data => { 
        this.districts = data.data;
      });
  }  

}
