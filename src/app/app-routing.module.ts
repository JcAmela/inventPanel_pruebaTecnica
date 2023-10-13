// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiposPaqueteComponent } from './pages/tipos-paquete/tipos-paquete.component';
import { TransportistasComponent } from './pages/transportistas/transportistas.component';
import { AuthGuard } from './guards/auth.guard';
// ... importa los otros componentes

const routes: Routes = [
  { path: 'tipos-paquete', component: TiposPaqueteComponent },
  { path: 'transportistas', component: TransportistasComponent },
  { path: 'tipos-paquete', component: TiposPaqueteComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/tipos-paquete', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
