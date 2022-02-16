import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { loginResponse } from '../services/catalogService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: loginResponse = null;
  showPage: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.authService.getAccount();
    console.log(this.currentUser);
    if(this.currentUser !== null){
      this.showPage = true;
    }else{
      this.authService.logout();
      this.router.navigate(['/']);
    }
  }

  logOut(){
    this.authService.logout();
    console.log(this.authService.getAccount());
    this.router.navigate(['/Home']);
  }

}
