import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-model-rules',
  templateUrl: './list-model-rules.component.html',
  styleUrls: ['./list-model-rules.component.css']
})
export class ListModelRulesComponent implements OnInit {

  title: String = 'Listagem Regras Modelo de Análise';

  dadosRegra = [];
  pag = 1;
  contador = 5;
  contextID:Subscription;
  modelo:string;
  processo:string;

  constructor(private routing:ActivatedRoute, private router:Router) { }

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
    this.dadosRegra = [
      { 'regra': '48', 'descricao': 'Descrição Descrição', 'acao': 'Aprova', 'interromper': 'NÃO', 'mensagem': 'mensagem mensagem mensagem mensagem mensagem mensagem', 'motivorecusa': 'Motivo', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel': 'Nome - Teste - AL2E' },
      { 'regra': '49', 'descricao': 'Descrição Descrição', 'acao': 'Aprova', 'interromper': 'NÃO', 'mensagem': 'mensagem mensagem mensagem mensagem mensagem mensagem', 'motivorecusa': 'Motivo', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel': 'Nome - Teste - AL2E' },
      { 'regra': '50', 'descricao': 'Descrição Descrição', 'acao': 'Aprova', 'interromper': 'NÃO', 'mensagem': 'mensagem mensagem mensagem mensagem mensagem mensagem', 'motivorecusa': 'Motivo', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel': 'Nome - Teste - AL2E' },
      { 'regra': '51', 'descricao': 'Descrição Descrição', 'acao': 'Aprova', 'interromper': 'NÃO', 'mensagem': 'mensagem mensagem mensagem mensagem mensagem mensagem', 'motivorecusa': 'Motivo', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel': 'Nome - Teste - AL2E' },
      { 'regra': '52', 'descricao': 'Descrição Descrição', 'acao': 'Aprova', 'interromper': 'NÃO', 'mensagem': 'mensagem mensagem mensagem mensagem mensagem mensagem', 'motivorecusa': 'Motivo', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel': 'Nome - Teste - AL2E' },
      { 'regra': '53', 'descricao': 'Descrição Descrição', 'acao': 'Aprova', 'interromper': 'NÃO', 'mensagem': 'mensagem mensagem mensagem mensagem mensagem mensagem', 'motivorecusa': 'Motivo', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel': 'Nome - Teste - AL2E' }
    ];
  }

  pageChanged(event) {
    this.pag = event;
  }

}
