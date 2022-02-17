import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EmpleadosDto, loginResponse, CatalogService } from '../services/catalogService';

@Component({
  selector: 'app-empleados-crud',
  templateUrl: './empleados-crud.component.html',
  styleUrls: ['./empleados-crud.component.scss']
})
export class EmpleadosCrudComponent implements OnInit {
  empleadoForm: FormGroup;
  ImageBaseData: string | ArrayBuffer = null;
  add: boolean = true;
  edit: boolean = false;
  empleados: EmpleadosDto[] = [];
  currentUser: loginResponse = null;
  showPage: boolean = false;
  constructor(private catalogService: CatalogService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    //console.log("Usuario logeado: ", this.authService.getAccount());
    this.currentUser = this.authService.getAccount();
    console.log(this.currentUser);
    // if(this.currentUser.rol !== 1){
    //   this.router.navigate(['/Home']);
    // }
    // if(this.currentUser === null){
    //   this.authService.logout();
    // }else if(this.currentUser.rol === 1){
    //   console.log("usuario correcto logueado");
    // }

    if(this.currentUser !== null){
      if(this.currentUser.rol !== 2){
        alert(this.currentUser.username+" no tiene acceso a esta pantalla\n Será redirijido al Inicio");
        this.router.navigate(['/Home']);
      }else{
        this.showPage = true;
        this.traerEmpleados();
      }
    }else{
      this.authService.logout();
      this.router.navigate(['/']);
    }
  }

  traerEmpleados() {
    //Trae a los empleados
    this.catalogService.getEmpleados().subscribe(x => {
      this.empleados = x;
    }, error => {
      alert("Error: \n" + error);
    });

    this.empleadoForm = new FormGroup({
      id: new FormControl(0, Validators.required),
      brm: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      puesto: new FormControl(null, Validators.required),
      //foto: new FormControl(null),
    });
  }

  setValues(data) {
    this.empleadoForm.patchValue({
      id: data.id,
      brm: data.brm,
      nombre: data.nombre,
      puesto: data.puesto,
      //foto: data.puesto
    });
  }

  guardarEmp() {
    let nuevoEmp = {} as EmpleadosDto;
    nuevoEmp.id = this.empleadoForm.controls["id"].value;
    nuevoEmp.brm = this.empleadoForm.controls["brm"].value;
    nuevoEmp.nombre = this.empleadoForm.controls["nombre"].value;
    nuevoEmp.puesto = this.empleadoForm.controls["puesto"].value;
    nuevoEmp.img = this.ImageBaseData.toString().split(",")[0];
    nuevoEmp.base64 = this.ImageBaseData.toString().split(",")[1];
    console.log(nuevoEmp);
    //Se agrega/edita
    this.catalogService.saveEmp(nuevoEmp).subscribe(res => {
      alert(res);
      this.ngOnInit();
    }, error => {
      alert("Error: \n" + error);
    });
  }

  editEmp(emp) {
    this.add = false;
    this.edit = true;
    this.setValues(emp);
  }

  elimEmp(emp) {
    this.catalogService.borraEmp(emp.id).subscribe(res => {
      alert(res);
      this.ngOnInit();
    }, error => {
      alert("Error: \n" + error);
      this.ngOnInit();
    });
  }

  handleFileInput(files: FileList) {
    let me = this;
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //console.log(reader.result);
      alert("Imagen cargada con éxito!");
      me.ImageBaseData = reader.result;
    };
    reader.onerror = function (error) {
      //console.log('Error: ', error);
      alert('Error al cargar imagen: ' + error)
    };
  }
  btnUpload() {
    console.log(this.ImageBaseData.toString())
  }
}