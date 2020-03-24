import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DrugstoreService } from '../../services/drugstore.service';
import { Globals } from '../../globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  drugStores: any;
  closeResult: any;
  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,
    private modalService: NgbModal,
    private drugstoreService: DrugstoreService,
    public globals: Globals
  ) { }

  ngOnInit() {

  }

  onAudioPlay(src){
    this.globals.player.nativeElement.pause();
    this.globals.player.nativeElement.src = src;
    this.globals.player.nativeElement.load();
    this.globals.player.nativeElement.play();
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

  openDrugstores(modal: any) {
    this.getDrugStores();
    this.open(modal);  
  }

  getDrugStores() {
    this.drugstoreService.getAll()
      .subscribe(data => {
        this.drugStores = data.data;
      });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
