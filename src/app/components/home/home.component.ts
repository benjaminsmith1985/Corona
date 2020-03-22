import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { DrugstoreService } from '../../services/drugstore.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  currentDistrict: any;
  districts: any;
  drugStores: any;
  closeResult: string;

  constructor(
    private mapService: MapService,
    private drugstoreService: DrugstoreService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.loadMap();
  }

  open(content: any) {
    this.modalService.open(content, { windowClass: 'dark-modal', ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
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

  getDistrictInfo(district: any, modal: any) {
    this.currentDistrict = district;
    this.getDrugStoreByDistrictId(district.ID);
    if(district.HasPoll == '1'){
      this.drugStores = "";
      this.open(modal);
    }    
  }

  getDrugStoreByDistrictId(districtId :any) {
    this.drugstoreService.getByDistrictId(districtId)
      .subscribe(data => {
        this.drugStores = data.data;
      });
  }

  loadMap() {
    this.mapService.getDistrict()
      .subscribe(data => {
        this.districts = data.data;
      });
  }

}
