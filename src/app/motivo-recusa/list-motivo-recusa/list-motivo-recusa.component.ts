import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-motivo-recusa',
  templateUrl: './list-motivo-recusa.component.html',
  styleUrls: ['./list-motivo-recusa.component.css']
})
export class ListMotivoRecusaComponent implements OnInit {
  
  searchForm:FormGroup;
  modalForm:FormGroup;
  title = "Listagem Motivo Recusa";
  isEdit:boolean = false;
  idEditContext:number;
  excDesc:[string,string] = ['null','null'];
  motivosRecusa = [];
  untouchedList:any[] = [];
  pag = 1;
  contador = 10;


  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.searchForm = this.fb.group({
      codRegra: [''],
        codStatus: ['']
    });

    this.modalForm = this.fb.group({
      descMotivo: [''],
        status: ['']
    });


    this.untouchedList = 
    [
    {codigo: "71", descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "71", descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP", status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
    {codigo: "1", descMotivo: "ERRO ACESSO PARAMETRO DO PRODUTO NO BCPP", status: "INATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"},
   ]

   this.motivosRecusa = Object.assign([],this.untouchedList); 
  }

  search(){
    let codRegra = this.IsNullOrEmpty(this.searchForm.controls.codRegra.value) ? null : this.searchForm.controls.codRegra.value;
    let codStatus = this.IsNullOrEmpty(this.searchForm.controls.codStatus.value) ? null : this.searchForm.controls.codStatus.value;

    

    this.motivosRecusa = Object.assign([],this.untouchedList); 
  
    if(this.motivosRecusa !== null && this.motivosRecusa.length >= 1 && codRegra !== null || codStatus !== null){
      this.motivosRecusa = this.motivosRecusa.filter(item => item.codigo == codRegra && item.status == codStatus || item.codigo == codRegra || item.status == codStatus); 
    }
  }

  submit(){

    if(this.modalForm.valid){
      if(!this.isEdit){
        this.untouchedList.push({codigo: "4", descMotivo: this.modalForm.controls.descMotivo.value, status: "ATIVO", dataUltimaAcao: "10/09/2017 15:52:47",usuarioResponsavel: "Nome - Teste - AL2E"});
        this.motivosRecusa = Object.assign([],this.untouchedList); 
        document.getElementById('close').click();
        console.log(this.modalForm); 
      }else{
        this.motivosRecusa[this.idEditContext].descMotivo = this.modalForm.controls.descMotivo.value;
        this.motivosRecusa[this.idEditContext].status = this.modalForm.controls.status.value;
        document.getElementById('close').click();
      }
         
    }
  }
 

  IsNullOrEmpty(value){
    if(value == null){
      return true;
    }
    if(value.length == 0){
      return true;
    }
    return false;
  }

  pageChanged(event) {
    this.pag = event;
  }

  deletarItem(index){
    
    
    this. untouchedList.splice(index,1);
    this.motivosRecusa = Object.assign([],this.untouchedList); 
  }


  modalCall(context:boolean, contextuser:any = null,index:number = null){
    this.isEdit = context;
    if(!context){
      this.modalForm = this.fb.group({
        descMotivo: ['',Validators.required],
          status: ['ATIVO']
      });
    }else{
      this.modalForm = this.fb.group({
        descMotivo: [contextuser.descMotivo,Validators.required],
          status: [contextuser.status]
      });
      this.idEditContext = index; 
    }
  }

}
