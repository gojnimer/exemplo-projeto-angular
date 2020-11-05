import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-mensagem',
  templateUrl: './list-mensagem.component.html',
  styleUrls: ['./list-mensagem.component.css']
})
export class ListMensagemComponent implements OnInit {

  searchForm:FormGroup;
  title = "Listagem Mensagem";

  excMsg:[string,string] = ['null','null'];
  sourceMsg = [];
  untouchedList = [];
  pag = 1;
  contador = 10;


  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.searchForm = this.fb.group({
      codMsg: [''],
      codTipoMsg: [''],
        codStatus: ['']
    });

   

    this.untouchedList = 
    [
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMsg: "CPF NÃO POSSUI SUSPEITA DE FRAUDE NO VISION",tipoMsg: "1 - ANALISE", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},

   ]

   this.sourceMsg = Object.assign([],this.untouchedList); 
  }

  search(){
    let codRegra = this.searchForm.controls.codMsg.value || null;
    let codStatus = this.searchForm.controls.codStatus.value || null;

    

    this.sourceMsg = Object.assign([],this.untouchedList); 
  
    if(this.sourceMsg !== null && this.sourceMsg.length >= 1 && codRegra !== null || codStatus !== null){
      this.sourceMsg = this.sourceMsg.filter(item => item.codigo == codRegra && item.status == codStatus || item.codigo == codRegra || item.status == codStatus); 
    }
  }

  
 

  pageChanged(event) {
    this.pag = event;
  }

  deletarItem(index){
    
    
    this. untouchedList.splice(index,1);
    this.sourceMsg = Object.assign([],this.untouchedList); 
  }

}
