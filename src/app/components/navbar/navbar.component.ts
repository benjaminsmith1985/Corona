import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ChartService } from '../../services/chart.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DrugstoreService } from '../../services/drugstore.service';
import { MedicsService } from '../../services/medics.service';
import { MediaplayerService } from '../../services/mediaplayer.service';
import { Globals } from '../../globals';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  drugStores: any;
  closeResult: any;
  currentRadio: any;
  medics: any;
  mediaplayer: any;
  internationalData: any;


  @ViewChild('audioOption') audioPlayerRef: ElementRef;


  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,
    private modalService: NgbModal,
    private chartService: ChartService,
    private drugstoreService: DrugstoreService,
    private medicsService: MedicsService,
    public globals: Globals
  ) {

  }

  ngOnInit() {
    this.mediaplayer = this.globals.player;
    this.getInternationalData();
  }

  onAudioPlay(src, id) {
    this.globals.player.setAndPlay(src);
    this.globals.player.playerId = id;
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

  openIntCorData(modal: any) {
    // this.getDrugStores();
    this.open(modal);
  }

  openDrugstores(modal: any) {
    this.getDrugStores();
    this.open(modal);
  }

  openMedics(modal: any) {
    this.getMedics();
    this.open(modal);
  }

  getDrugStores() {
    this.drugstoreService.getAll()
      .subscribe(data => {
        this.drugStores = data.data;
      });
  }

  getMedics() {
    this.medicsService.getAll()
      .subscribe(data => {
        this.medics = data.data;
      });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  getInternationalData() {
    this.chartService.getInternationalData()
      .subscribe(data => {
        this.internationalData = data;
      });
  }

}
