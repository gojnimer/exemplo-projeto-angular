import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-model-contigency',
  templateUrl: './list-model-contigency.component.html',
  styleUrls: ['./list-model-contigency.component.css']
})
export class ListModelContigencyComponent implements OnInit {

  title: string = 'Listagem Contingência';
  contextID: Subscription;
  modelo:string;
  processo:string;
  dadosContingencia = [];
  pag = 1;
  contador = 5;

  constructor(private routing:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.contextID = this.routing.params.subscribe(param =>
      {
        if(!param.idModelo || !param.idProcesso){
          this.router.navigate(['..']);
          return;
        }
        this.modelo = param.idModelo;
        this.processo = param.idProcesso;

      });
    this.dadosContingencia = [
      {'contingencia' : 'Ausência de Informação', 'acao' : 'APROVA', 'interromper' : 'NÃO', 'mensagem' : 'Mensagem de Teste', 'motivorecusa' : 'Teste Recusa', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
    ];
  }

}
