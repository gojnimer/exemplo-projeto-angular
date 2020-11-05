import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contingency',
  templateUrl: './list-contingency.component.html',
  styleUrls: ['./list-contingency.component.css']
})
export class ListContingencyComponent implements OnInit {

  title: string = 'Listagem Contingência';

  dadosContingencia = [];
  pag = 1;
  contador = 5;

  constructor() { }

  ngOnInit() {
    this.dadosContingencia = [
      {'contingencia' : 'Ausência de Informação', 'acao' : 'APROVA', 'interromper' : 'NÃO', 'mensagem' : 'Mensagem de Teste', 'motivorecusa' : 'Teste Recusa', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
    ];
  }

}
