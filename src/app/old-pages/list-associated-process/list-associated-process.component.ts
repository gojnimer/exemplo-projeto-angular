import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListAssociatedProcessApiService } from './shared/list-associated-process-api.service';

@Component({
  selector: 'app-list-associated-process',
  templateUrl: './list-associated-process.component.html',
  styleUrls: ['./list-associated-process.component.css']
})
export class ListAssociatedProcessComponent implements OnInit {

  title: string = 'Listagem Processos Associados';

  associatedProcessForm: FormGroup;


  dadosProcessos = [];
  pag = 1;
  contador = 5;

  constructor(private modelService: ListAssociatedProcessApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dadosProcessos = [
      { 'descricao': 'Modelo ABC', 'processo': '12', 'ordemexecucao': '1', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel': 'Nome - Teste - AL2E' },
    ];

    this.associatedProcessForm = this.formBuilder.group({
      idModeloAnalise: [''],
      dsProcesso: [''],
      idProcesso: [''],
      ordemProcesso: ['']
    });

    this.modelService.getListasAssociatedProcess('1', '', '1', '')
        .subscribe(dados => this.dadosProcessos = dados);
  }

  pageChanged(event) {
    this.pag = event;
  }

  submit() {
    let idModeloAnalise = this.associatedProcessForm.controls.idModeloAnalise.value;
    let dsProcesso = this.associatedProcessForm.controls.dsProcesso.value;
    let idProcesso = this.associatedProcessForm.controls.idProcesso.value;
    let ordemProcesso = this.associatedProcessForm.controls.ordemProcesso.value;

    this.modelService.getListasAssociatedProcess(idModeloAnalise, dsProcesso, idProcesso, ordemProcesso)
        .subscribe(dados => this.dadosProcessos = dados);
  }

}
