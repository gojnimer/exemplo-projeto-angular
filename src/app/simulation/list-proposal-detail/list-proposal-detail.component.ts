import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-proposal-detail',
  templateUrl: './list-proposal-detail.component.html',
  styleUrls: ['./list-proposal-detail.component.css']
})
export class ListProposalDetailComponent implements OnInit {

  mainForm: FormGroup = this.fb.group({
    'dtInicial': [''],
    'dtFim': [''],
  })

  title = 'Monitor - Detalhe de Propostas';

  dadosPropostas = [];
  pag = 1;
  contador = 5;

  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit() {

    this.mainForm = this.fb.group({
      dtInicial: ['2020-03-10'],
      dtFim: ['2020-03-19']
    })

    this.dadosPropostas = [
      { 'id': 1, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
      { 'id': 2, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
      { 'id': 3, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
      { 'id': 4, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
      { 'id': 5, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
      { 'id': 6, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
      { 'id': 7, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
      { 'id': 8, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
      { 'id': 9, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
      { 'id': 10, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
      { 'id': 11, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
      { 'id': 12, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
      { 'id': 13, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
      { 'id': 14, 'cpfcliente': '000.000.000-00', 'modelo': 'Modelo Análise Teste', 'descmodelo': 'Descrição Modelo Teste', 'dataCadastro': '10/09/2017 15:52:47', 'numeroproposta': '00000000', 'statusanalise': 'Status Análise Teste', 'isChecked': false },
    ];
  }

  checkAll(){
    this.dadosPropostas.forEach(a => {
        a.isChecked = a.isChecked ? false : true;
    });
  }

  pageChanged(event) {
    this.pag = event;
  }

}
