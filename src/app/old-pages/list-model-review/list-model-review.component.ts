import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListModelReviewApiService } from './shared/list-model-review-api.service';

@Component({
  selector: 'app-list-model-review',
  templateUrl: './list-model-review.component.html',
  styleUrls: ['./list-model-review.component.css']
})
export class ListModelReviewComponent implements OnInit {

  title: string = 'Listagem Modelos de Análise';

  modelForm: FormGroup;


  dadosModelo = [];
  pag = 1;
  contador = 5;

  constructor(private modelService: ListModelReviewApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.modelForm = this.formBuilder.group({
      codRegra: [''],
      descricaoModelo: ['']
    });

    this.modelService.getListasModelReview('', '').subscribe(dados => this.dadosModelo = dados);
    // this.dadosModelo = [
    //   {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
    //   {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
    //   {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
    //   {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
    //   {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
    //   {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
    //   {'codigo' : '1', 'descricao' : 'Modelo ABC', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
    //   {'codigo' : '2', 'descricao' : 'Modelo CBA', 'datacadastro': '10/09/2017 16:00:00', 'usuarioresponsavel':'Nome - Teste - AL2E'},
    // ];
  }

  pageChanged(event) {
    this.pag = event;
  }

  submit(){
    let codRegra = this.modelForm.controls.codRegra.value;
    let descricaoModelo = this.modelForm.controls.descricaoModelo.value;
    
    this.modelService.getListasModelReview(codRegra, descricaoModelo).subscribe(dados => this.dadosModelo = dados);
  }

}
