import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {


  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
