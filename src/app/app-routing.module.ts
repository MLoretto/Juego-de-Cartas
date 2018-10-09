import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CartasComponent } from './cartas/cartas.component';

const routes: Routes = [
  
  { path: '' , component: InicioComponent},
  { path: 'cartas' , component: CartasComponent}/*
  { path: 'muro', component: WallComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'perfileditar', component: CreateProfileComponent},
  { path: 'crearcuenta', component: CreateAccountComponent}
  */
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
