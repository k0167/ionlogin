import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component'
import {CadastrarComponent} from './cadastrar/cadastrar.component'
import {RecuperarComponent} from './recuperar/recuperar.component'
import {AuthRoutingModule} from './auth-routing.module'

@NgModule({
  declarations: [
    LoginComponent,
    CadastrarComponent,
    RecuperarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports:[
    LoginComponent,
    CadastrarComponent,
    RecuperarComponent

  ]

})
export class AuthModule { }
