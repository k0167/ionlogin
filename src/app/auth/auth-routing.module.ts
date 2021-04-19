import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadastrarComponent} from './cadastrar/cadastrar.component'
import {RecuperarComponent} from './recuperar/recuperar.component'
import { LoginComponent } from './login/login.component';

 
const routes: Routes = [
    {   path: 'auth/login',   component: LoginComponent   },
    {   path: 'auth/cadastrar',   component: CadastrarComponent   },
    {   path: 'auth/recuperar',   component: RecuperarComponent   },
    {   path: '',   redirectTo: '/auth/login', pathMatch: 'full' }
  ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }