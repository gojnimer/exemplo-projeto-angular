import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListRestrictiveApiService } from './shared/list-restrictive-api.service';

@Component({
  selector: 'app-list-restrictive-spc',
  templateUrl: './list-restrictive-spc.component.html',
  styleUrls: ['./list-restrictive-spc.component.css']
})
export class ListRestrictiveSpcComponent implements OnInit {

  restrictiveForm: FormGroup;

  title: String = 'Listagem Restritivo SPC';

  dadosRegra = [];
  pag = 1;
  contador = 5;

  constructor(private restrictiveService: ListRestrictiveApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.restrictiveForm = this.formBuilder.group({
      codRegra: [''],
      codStatus: ['']
    });

    //this.restrictiveService.getListasRestrictiveSpc('', '').subscribe(dados => this.dadosRegra = dados);

    this.dadosRegra = [
      {'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'quantidadedias':'23', 'valorrestricaoinicial':'23,06', 'valorrestricaofinal':'23,06', 'situacaorf':'Situação','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'quantidadedias':'23', 'valorrestricaoinicial':'23,06', 'valorrestricaofinal':'23,06', 'situacaorf':'Situação','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'quantidadedias':'23', 'valorrestricaoinicial':'23,06', 'valorrestricaofinal':'23,06', 'situacaorf':'Situação','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'quantidadedias':'23', 'valorrestricaoinicial':'23,06', 'valorrestricaofinal':'23,06', 'situacaorf':'Situação','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'quantidadedias':'23', 'valorrestricaoinicial':'23,06', 'valorrestricaofinal':'23,06', 'situacaorf':'Situação','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : 'I908', 'descricao' : '78 - Score - SPC TST', 'quantidadedias':'23', 'valorrestricaoinicial':'23,06', 'valorrestricaofinal':'23,06', 'situacaorf':'Situação','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'quantidadedias':'23', 'valorrestricaoinicial':'23,06', 'valorrestricaofinal':'23,06', 'situacaorf':'Situação','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'quantidadedias':'23', 'valorrestricaoinicial':'23,06', 'valorrestricaofinal':'23,06', 'situacaorf':'Situação','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'quantidadedias':'23', 'valorrestricaoinicial':'23,06', 'valorrestricaofinal':'23,06', 'situacaorf':'Situação','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'quantidadedias':'23', 'valorrestricaoinicial':'23,06', 'valorrestricaofinal':'23,06', 'situacaorf':'Situação','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'quantidadedias':'23', 'valorrestricaoinicial':'23,06', 'valorrestricaofinal':'23,06', 'situacaorf':'Situação','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'quantidadedias':'23', 'valorrestricaoinicial':'23,06', 'valorrestricaofinal':'23,06', 'situacaorf':'Situação','datacadastro':'10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
    ];
  }

  pageChanged(event) {
    this.pag = event;
  }

  submit(){
    let codRegra = this.restrictiveForm.controls.codRegra.value;
    let codStatus = this.restrictiveForm.controls.codStatus.value;
    
    this.restrictiveService.getListasRestrictiveSpc(codRegra, codStatus).subscribe(dados => this.dadosRegra = dados);
  }

}
