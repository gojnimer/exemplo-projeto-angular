import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-parametro-analise',
  templateUrl: './list-parametro-analise.component.html',
  styleUrls: ['./list-parametro-analise.component.css']
})
export class ListParametroAnaliseComponent implements OnInit {

  title = "Listagem Parâmetros de Análise";
  searchForm:FormGroup;
  param:[string,string] = ['null','null'];
  untouchedList:any[] = [];
  paramsAnalise:any[] = [];
  pag = 1;
  contador = 5;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    
    this.searchForm = this.fb.group({
      codRegra: ['',Validators.required]
    });



    this.untouchedList = [
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '1', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '12', totalProposta:'99',idadeMinima: '1', periodoTotal: '30', validadeAnalise:'30', rendaMinima: 'R$ 300,00',idadeMinimaAdicional:'1', dataCadastro:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'}
    ];
    this.paramsAnalise = Object.assign([],this.untouchedList);
  }

  pageChanged(event) {
    this.pag = event;
  }

  search(){ 
    this.paramsAnalise = Object.assign([],this.untouchedList);
     if(this.searchForm.valid){
       this.paramsAnalise = this.paramsAnalise.filter(obj => obj.codigo == this.searchForm.controls.codRegra.value);
     }
  }

  deletarItem(index){
    
    
    this.untouchedList.splice(index,1);
    this.paramsAnalise = Object.assign([],this.untouchedList); 
  }

}


