import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent implements OnInit {

  mensagem:string = "" ;
  show: boolean=false;

  constructor() { }
  onclick(){
    this.show=true;
    this.mensagem="Cadastrado com Sucesso!";
  }
  ngOnInit() {}

}
