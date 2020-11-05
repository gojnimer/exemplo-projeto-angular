import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-analysis-model',
  templateUrl: './list-analysis-model.component.html',
  styleUrls: ['./list-analysis-model.component.css']
})
export class ListAnalysisModelComponent implements OnInit {

  title: string = 'Listagem Modelos de Análise';

  modelForm: FormGroup;


  dadosModelo = [];
  pag = 1;
  contador = 5;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.modelForm = this.formBuilder.group({
      codRegra: [''],
      descricaoModelo: ['']
    });

    
    this.dadosModelo = [
      {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
      {'codigo' : '2', 'descricao' : 'Modelo CBA', 'datacadastro': '10/09/2017 16:00:00', 'usuarioresponsavel':'Nome - Teste - AL2E'},
    ];
  }

  pageChanged(event) {
    this.pag = event;
  }

  submit(){
    let codRegra = this.modelForm.controls.codRegra.value;
    let descricaoModelo = this.modelForm.controls.descricaoModelo.value;
    
    /* this.modelService.getListasModelReview(codRegra, descricaoModelo).subscribe(dados => this.dadosModelo = dados); */
  }

}
