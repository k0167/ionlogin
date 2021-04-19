import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss'],
})
export class RecuperarComponent implements OnInit {
  mensagem:string = "" ;
  show: boolean=false;

  constructor() { }
  onclick(){
    this.show=true;
    this.mensagem="Enviado com Sucesso!";
  }
  ngOnInit() {}

}
