import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import { DrugstoreService } from '../../services/drugstore.service';
import { MedicsService } from '../../services/medics.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  currentDistrict: any;
  districts: any;
  activities: any;
  selectedActivity: any = "apo";
  closeResult: string;
  medicals: any;
  drugstores: any;

  constructor(
    private mapService: MapService,
    private drugstoreService: DrugstoreService,
    private medicsService: MedicsService,
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
    // this.selectedActivity = "apo";
    this.currentDistrict = district;
    this.getMapActivities(district.ID);
    if (district.HasPoll == '1') {
      this.activities = "";
      this.open(modal);
    }
  }

  getDrugStoreByDistrictId(districtId: any) {
    this.drugstoreService.getByDistrictId(districtId)
      .subscribe(data => {
        this.activities = data.data;
      });
  }

  getMedicsByDistrictId(districtId: any) {
    this.medicsService.getByDistrictId(districtId)
      .subscribe(data => {
        this.activities = data.data;
      });
  }

  getMapActivities(districtId: any) {
    this.medicals = false;
    this.drugstores = false;
    this.mapService.getActivities(districtId)
      .subscribe(data => {
        this.medicals = data.medicals;
        this.drugstores = data.drugstores;
        if(this.drugstores){
          this.selectedActivity = 'apo';
          this.getDrugStoreByDistrictId(districtId);
        }else{
          this.selectedActivity = 'art';
          this.getMedicsByDistrictId(districtId);
        }
      });
  }

  setActivity(activity, districtId) {
    this.selectedActivity = activity;
    switch (activity) {
      case 'art':
        this.getMedicsByDistrictId(districtId);
        break;
      case 'apo':
        this.getDrugStoreByDistrictId(districtId);
        break;
    }
  }

  loadMap() {
    this.mapService.getDistrict()
      .subscribe(data => {
        this.districts = data.data;
      });
  }

}
