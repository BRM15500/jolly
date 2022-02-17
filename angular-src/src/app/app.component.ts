import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CatalogService, loginForm, loginResponse } from './services/catalogService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Banregio Web App';
  isLoged: boolean = false;
  logedUser: loginResponse = null;
  currentUser: loginResponse = null;
  leftContent = [{ description: 'MENU', isTitle: true }, {description: 'Empleados',isTitle: false,route: '/Empleados'}, {description: 'Juego',isTitle: false,route: '/Juego'}, {description: 'Home',isTitle: false,route: '/Home'}];
  mainContent = [];
  constructor(private catalogService: CatalogService, private authService: AuthService, private router: Router){}

  ngOnInit(){
    this.currentUser = this.authService.getAccount();
    console.log(this.currentUser);
    if(this.currentUser !== null){
      console.log("logeado");
      // switch(this.currentUser.rol){
      //   case 1:
      //     this.leftContent = [{ description: 'MENU', isTitle: true }, {description: 'Juego',isTitle: false,route: '/Juego'}, {description: 'Home',isTitle: false,route: '/Home'}];
      //     break;
      //   case 2:
      //     this.leftContent = [{ description: 'MENU', isTitle: true }, {description: 'Empleados',isTitle: false,route: '/Empleados'}, {description: 'Home',isTitle: false,route: '/Home'}];
      //     break;
      // }
      this.isLoged = true;
      this.logedUser = this.authService.getAccount();
      }else{
        console.log("logOut");
        this.isLoged = false;
        this.logedUser = null;
        this.currentUser = null;
      }
    }

    login(user, pass){
      console.log(user);
      console.log(pass);
      let login = {} as loginForm;
      login.username = user;
      login.password = pass;
      this.catalogService.login(login).subscribe(x => {
        console.log(x);
        if(x.username){
          alert(x.username+" se ha logueado con éxito!");
          this.isLoged = true;
          this.logedUser = x;
          this.authService.setAccount(x);
          this.router.navigate(['/Home']);
        }else{
          alert("Credenciales inválidas");
        }
      },error =>{
        alert("Valide la información de entrada");
      })
  }
}
