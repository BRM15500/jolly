import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { loginResponse } from '../services/catalogService';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {
  currentUser: loginResponse = null;
  gameStarted: boolean = false;
  showPage: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.authService.getAccount();
    console.log(this.currentUser);
    if(this.currentUser !== null){
      if(this.currentUser.rol !== 1){
        this.router.navigate(['/Home']);
      }else{
        this.showPage = true;
      }
    }else{
      this.authService.logout();
      this.router.navigate(['/']);
    }
  }

  initGame(){
    this.gameStarted = true;
  }
}
