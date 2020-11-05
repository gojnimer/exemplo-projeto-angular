import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-associated-process-model',
  templateUrl: './list-associated-process-model.component.html',
  styleUrls: ['./list-associated-process-model.component.css']
})
export class ListAssociatedProcessModelComponent implements OnInit {

  title: string = 'Listagem Processos Associados';
  
  modalForm: FormGroup;
  associatedProcessForm: FormGroup;
  contextID: Subscription;

  dadosProcessos = [];
  pag = 1;
  contador = 5;

  constructor( private formBuilder: FormBuilder, private routing:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.contextID = this.routing.params.subscribe(param =>
      {
        if(!param.idModelo){
          this.router.navigate(['/Modelos']);
          return;
        }
        this.associatedProcessForm = this.formBuilder.group({
          idModeloAnalise: [param.idModelo],
          dsProcesso: [''],
          idProcesso: [''],
          ordemProcesso: ['']
        });
      });
    this.dadosProcessos = [
      { 'descricao': 'Modelo ABC', 'processo': '12', 'ordemexecucao': '1', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel': 'Nome - Teste - AL2E' },
      { 'descricao': 'Modelo ABC', 'processo': '13', 'ordemexecucao': '1', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel': 'Nome - Teste - AL2E' },
      { 'descricao': 'Modelo ABC', 'processo': '14', 'ordemexecucao': '1', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel': 'Nome - Teste - AL2E' },
      { 'descricao': 'Modelo ABC', 'processo': '15', 'ordemexecucao': '1', 'datacadastro': '10/09/2017 15:52:47', 'usuarioresponsavel': 'Nome - Teste - AL2E' },
    ];
    this.modalForm = this.formBuilder.group({
      codModelo: [''],
      descProcesso:[''],
      processos:[''],
      ordemExec:[''],
      usuario:['']
    });

    

   
  }

  pageChanged(event) {
    this.pag = event;
  }

  submit() {
    let idModeloAnalise = this.associatedProcessForm.controls.idModeloAnalise.value;
    let dsProcesso = this.associatedProcessForm.controls.dsProcesso.value;
    let idProcesso = this.associatedProcessForm.controls.idProcesso.value;
    let ordemProcesso = this.associatedProcessForm.controls.ordemProcesso.value;

   
  }


  deletarItem(){
    this.modalForm = this.formBuilder.group({
      codModelo: ['1'],
      descProcesso:[''],
      processos:[''],
      ordemExec:[''],
      usuario:['']
    });
      
    
  }

}
