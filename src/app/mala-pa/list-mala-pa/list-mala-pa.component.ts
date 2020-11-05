import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-mala-pa',
  templateUrl: './list-mala-pa.component.html',
  styleUrls: ['./list-mala-pa.component.css']
})
export class ListMalaPaComponent implements OnInit {

  title = "Listagem Pré-Aprovação";
  searchForm:FormGroup;
  param:[string,string] = ['null','null'];
  untouchedList:any[] = [];
  paramsMala:any[] = [];
  pag = 1;
  contador = 5;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    
    this.searchForm = this.fb.group({
      codRegra: ['',Validators.required],
      status:['',Validators.required],
      dtInicioVigencia: ['',Validators.required]

    });



    this.untouchedList = [
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      {codigo: '71', desc:'Teste Crédito 27/06',prioridade: '20', dataInicioVigencia: '27/06/2016', dataFimVigencia:'01/06/2019', tipoMala: '1 - GENERICA',manterOutrasMalas:'1 - SIM', status:'ATIVO', dataUltimaAcao:'10/09/2017 15:52:47', usuarioResponsavel:'Nome - Teste - AL2E'},
      
    ];
    this.paramsMala = Object.assign([],this.untouchedList);
  }

  pageChanged(event) {
    this.pag = event;
  }

  search(){ 
    this.paramsMala = Object.assign([],this.untouchedList);
     if(this.searchForm.valid){
       this.paramsMala = this.paramsMala.filter(obj => obj.codigo == this.searchForm.controls.codRegra.value);
     }
  }

  deletarItem(index){
    
    
    this.untouchedList.splice(index,1);
    this.paramsMala = Object.assign([],this.untouchedList); 
  }


}
