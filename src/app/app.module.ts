import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TiposPaqueteComponent } from './pages/tipos-paquete/tipos-paquete.component';
import { TransportistasComponent } from './pages/transportistas/transportistas.component';
import { CodigosPostalesComponent } from './pages/codigos-postales/codigos-postales.component';
import { TrabajadoresComponent } from './pages/trabajadores/trabajadores.component';
import { EnviosComponent } from './pages/envios/envios.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    TiposPaqueteComponent,
    TransportistasComponent,
    CodigosPostalesComponent,
    TrabajadoresComponent,
    EnviosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
