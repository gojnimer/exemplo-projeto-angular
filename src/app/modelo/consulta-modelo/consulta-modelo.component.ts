import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-modelo',
  templateUrl: './consulta-modelo.component.html',
  styleUrls: ['./consulta-modelo.component.css']
})
export class ConsultaModeloComponent implements OnInit {

  dadosRegras:any[] = [];
  dadosContigencia:any[] = [];
  title = "Consulta Modelo de Análise"
  pag = 1;
  contador = 5;
  pag2 = 1;
  contador2 = 5;
  constructor() { }

  ngOnInit() {
    this.dadosRegras = [
      {regra: '36 - Testes regra',acao: '1 - APROVA', interromper:"1 - SIM", mensagem: '11 - Mensagem Teste', motivoRecusa:'16 - Teste motivo recusa', usuario: "Nome - Teste - AL2E", horaManutencao:'10/09/2017 15:52:47'}
    ];
    this.dadosContigencia = [
      {contigencia:'1 - AUSENCIA DE INFORMAÇÃO', acao:'1 - APROVA', interromper:'1 - SIM', motivoRecusa:'11 - TESTE MOTIVO RECUSA', mensagem:'7 - Teste Mensagem'},
      {contigencia:'1 - AUSENCIA DE INFORMAÇÃO', acao:'1 - APROVA', interromper:'1 - SIM', motivoRecusa:'11 - TESTE MOTIVO RECUSA', mensagem:'7 - Teste Mensagem'},
      {contigencia:'1 - AUSENCIA DE INFORMAÇÃO', acao:'1 - APROVA', interromper:'1 - SIM', motivoRecusa:'11 - TESTE MOTIVO RECUSA', mensagem:'7 - Teste Mensagem'},
      {contigencia:'1 - AUSENCIA DE INFORMAÇÃO', acao:'1 - APROVA', interromper:'1 - SIM', motivoRecusa:'11 - TESTE MOTIVO RECUSA', mensagem:'7 - Teste Mensagem'},
      {contigencia:'1 - AUSENCIA DE INFORMAÇÃO', acao:'1 - APROVA', interromper:'1 - SIM', motivoRecusa:'11 - TESTE MOTIVO RECUSA', mensagem:'7 - Teste Mensagem'},
      {contigencia:'1 - AUSENCIA DE INFORMAÇÃO', acao:'1 - APROVA', interromper:'1 - SIM', motivoRecusa:'11 - TESTE MOTIVO RECUSA', mensagem:'7 - Teste Mensagem'},
      {contigencia:'1 - AUSENCIA DE INFORMAÇÃO', acao:'1 - APROVA', interromper:'1 - SIM', motivoRecusa:'11 - TESTE MOTIVO RECUSA', mensagem:'7 - Teste Mensagem'},
      {contigencia:'1 - AUSENCIA DE INFORMAÇÃO', acao:'1 - APROVA', interromper:'1 - SIM', motivoRecusa:'11 - TESTE MOTIVO RECUSA', mensagem:'7 - Teste Mensagem'},
      {contigencia:'1 - AUSENCIA DE INFORMAÇÃO', acao:'1 - APROVA', interromper:'1 - SIM', motivoRecusa:'11 - TESTE MOTIVO RECUSA', mensagem:'7 - Teste Mensagem'},
      {contigencia:'1 - AUSENCIA DE INFORMAÇÃO', acao:'1 - APROVA', interromper:'1 - SIM', motivoRecusa:'11 - TESTE MOTIVO RECUSA', mensagem:'7 - Teste Mensagem'},
      {contigencia:'1 - AUSENCIA DE INFORMAÇÃO', acao:'1 - APROVA', interromper:'1 - SIM', motivoRecusa:'11 - TESTE MOTIVO RECUSA', mensagem:'7 - Teste Mensagem'},
      {contigencia:'1 - AUSENCIA DE INFORMAÇÃO', acao:'1 - APROVA', interromper:'1 - SIM', motivoRecusa:'11 - TESTE MOTIVO RECUSA', mensagem:'7 - Teste Mensagem'}

    ];
  }

  pageChanged(event,second = false) {
    if(second){
      this.pag2 = event;
      return;
    }
    this.pag = event;
  }

}
