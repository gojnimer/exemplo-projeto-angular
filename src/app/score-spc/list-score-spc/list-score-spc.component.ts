import { Subscription } from 'rxjs';
import { LoadingSpinnerService } from './../../shared-services/loading-spinner.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListScoreApiService } from './shared/list-score-api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-score-spc',
  templateUrl: './list-score-spc.component.html',
  styleUrls: ['./list-score-spc.component.css']
})
export class ListScoreSPCComponent implements OnInit,OnDestroy {

  scoreForm: FormGroup;

  title = 'Listagem Score SPC';

  dadosCliente = [];
  pag = 1;
  contador = 5;


  constructor(private scoreSerivice: ListScoreApiService, private formBuilder: FormBuilder,private spinner:LoadingSpinnerService) { }

  ngOnInit() {

   /*  this.scoreSerivice.getListasScoreSpc('', '').subscribe(dados => this.dadosCliente = dados); */
    this.spinner.LoadingEvent.next(true);
    this.scoreForm = this.formBuilder.group({
      codRegra: [''],
      tipoCliente: ['']
    });

     this.dadosCliente = [
       {'tipocliente' : 'Cliente', 'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
       {'tipocliente' : 'Cliente', 'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
       {'tipocliente' : 'Cliente', 'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
       {'tipocliente' : 'Cliente', 'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
       {'tipocliente' : 'Cliente', 'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
       {'tipocliente' : 'Cliente', 'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
       {'tipocliente' : 'Cliente', 'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
       {'tipocliente' : 'Cliente', 'codigo' : 'I908346', 'descricao' : '78 - Score - SPC TST', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel':'Nome - Teste - AL2E'},
     ];
     setTimeout(() => this.spinner.LoadingEvent.next(false), 3000);
  }

  pageChanged(event) {
    this.pag = event;
  }

  submit(){
    let codRegra = this.scoreForm.controls.codRegra.value;
    let tipoCliente = this.scoreForm.controls.tipoCliente.value;
    
    /* this.scoreSerivice.getListasScoreSpc(codRegra, tipoCliente).subscribe(dados => this.dadosCliente = dados); */
  }

  ngOnDestroy() {
    this.spinner.LoadingEvent.next(false);
  }

}
