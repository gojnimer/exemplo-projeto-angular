import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-restritive-serasa',
  templateUrl: './list-restritive-serasa.component.html',
  styleUrls: ['./list-restritive-serasa.component.css']
})
export class ListRestritiveSerasaComponent implements OnInit {

  mainForm: FormGroup;
  title = "Listagem Restritivo SERASA";
  regra:[string,string] = ['null','null'];
  showEmpty:boolean = true;

  untouchedList = [];
  dadosRegra = [];
  pag = 1;
  contador = 5;

  options: any[] = [{item: "Teste",value: "2"},{item: "Teste2",value: "3"}]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.mainForm = this.fb.group({
      codRegra: [''],
        codStatus: ['']
    });

    this.untouchedList = [
      {'codigo' : '12', 'quantidadeOcorrencia' : '3', 'quantidadediasConsInterna':'23', 'score':'300', 'status':'1','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '13', 'quantidadeOcorrencia' : '4', 'quantidadediasConsInterna':'24', 'score':'300', 'status':'2','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '14', 'quantidadeOcorrencia' : '5', 'quantidadediasConsInterna':'25', 'score':'300', 'status':'3','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '15', 'quantidadeOcorrencia' : '6', 'quantidadediasConsInterna':'26', 'score':'300', 'status':'3','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '16', 'quantidadeOcorrencia' : '7', 'quantidadediasConsInterna':'23', 'score':'300', 'status':'3','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '1', 'quantidadeOcorrencia' : '8', 'quantidadediasConsInterna':'23', 'score':'400', 'status':'3','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '18', 'quantidadeOcorrencia' : '3', 'quantidadediasConsInterna':'23', 'score':'300', 'status':'1','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '13', 'quantidadeOcorrencia' : '3', 'quantidadediasConsInterna':'23', 'score':'300', 'status':'1','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '13', 'quantidadeOcorrencia' : '3', 'quantidadediasConsInterna':'23', 'score':'300', 'status':'1','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '13', 'quantidadeOcorrencia' : '3', 'quantidadediasConsInterna':'23', 'score':'300', 'status':'1','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '13', 'quantidadeOcorrencia' : '3', 'quantidadediasConsInterna':'23', 'score':'300', 'status':'5','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '13', 'quantidadeOcorrencia' : '3', 'quantidadediasConsInterna':'29', 'score':'700', 'status':'12','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL34'},
    ];
    this.dadosRegra = this.untouchedList;
    this.showEmpty = this.untouchedList.length > 0 ? false : true;
  }


  search(){
    let codRegra = this.IsNullOrEmpty(this.mainForm.controls.codRegra.value) ? null : this.mainForm.controls.codRegra.value;
    let codStatus = this.IsNullOrEmpty(this.mainForm.controls.codStatus.value) ? null : this.mainForm.controls.codStatus.value;

    

    this.dadosRegra = Object.assign([],this.untouchedList); 
  
    if(this.dadosRegra !== null && this.dadosRegra.length >= 1 && codRegra !== null || codStatus !== null){
      if(codRegra && codStatus){
        this.dadosRegra = this.dadosRegra.filter(item => item.codigo == codRegra && item.status == codStatus); 
        return;
      }else if(codRegra){
        this.dadosRegra = this.dadosRegra.filter(item => item.codigo == codRegra); 
      }else{
        this.dadosRegra = this.dadosRegra.filter(item => item.status == codStatus); 
      }
      
    }
  }

  sortList(){
    this.dadosRegra.sort((a,b) => a.codigo > b.codigo ? 1 : -1);
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
  

  deletarItem(index){
    
    
    this.untouchedList.splice(index,1);
    this.dadosRegra = Object.assign([],this.untouchedList); 
  }

  pageChanged(event) {
    this.pag = event;
  }

}
