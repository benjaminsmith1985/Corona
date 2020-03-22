import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  districts: any;
  closeResult: string;

  constructor(
    private mapService: MapService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {   
    this.loadMap();
  } 

  
  

  open(content) {
    this.modalService.open(content, {windowClass: 'dark-modal', ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
}

private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return `with: ${reason}`;
    }
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
