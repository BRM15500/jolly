import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameworkModule } from '@next/nx-core';
import { CommonsModule } from '@next/nx-controls-common';
import { EmpleadosCrudComponent } from './empleados-crud/empleados-crud.component';
import { HomeComponent } from './home/home.component';
import { JuegoComponent } from './juego/juego.component';
import { MenuComponent } from './menu/menu.component';
import { CuadroComponent } from './juego/cuadro/cuadro.component';
import { TablaComponent } from './juego/tabla/tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const config = {
  usernameLabel: 'BRM/BRS/BRE',
  usernamePlaceholder: 'Usuario',
  endpoint: '/api',
  application: 'MI_PROYECTO',
  applicationTitle: 'Mi Proyecto'
};

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosCrudComponent,
    HomeComponent,
    JuegoComponent,
    MenuComponent,
    CuadroComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    //FrameworkModule.forRoot(config),
    CommonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
