import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-analysis-model-rules',
  templateUrl: './list-analysis-model-rules.component.html',
  styleUrls: ['./list-analysis-model-rules.component.css']
})
export class ListAnalysisModelRulesComponent implements OnInit {

  title: String = 'Listagem Regras Modelo de Análise';

  dadosRegra = [];
  pag = 1;
  contador = 5;

  modelo: String = '3 - Modelo de Análise';
  processo: String = '1 - Teste';

  constructor() { }

  ngOnInit() {
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
