import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-mensagem',
  templateUrl: './form-mensagem.component.html',
  styleUrls: ['./form-mensagem.component.css']
})
export class FormMensagemComponent implements OnInit {

  mainForm:FormGroup;
  routeSub:Subscription;
  action:string = null;

  contextID:string = null;
  constructor(private route:ActivatedRoute,private routing:Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(param => {

      switch(param.action){
        case "new": {
          this.action = "new";
          this.mainForm = this.construct(this.action);
          break;
        }
        case "edit": {
          
          if(!this.route.snapshot.queryParams['id']){
            this.routing.navigate(['Mensagem']);
            break;
          }
          this.contextID = this.route.snapshot.queryParams['id'];
          this.action = "edit";
          this.mainForm = this.construct(this.action);
          break;

        }
        case "show": {
          if(!this.route.snapshot.queryParams['id']){
            this.routing.navigate(['Mensagem']);
            break;
          }
          this.contextID = this.route.snapshot.queryParams['id'];
          this.action = "show";
          this.mainForm = this.construct(this.action);
          break;
        }
        default: {
          this.routing.navigate(['Mensagem']);
          break;  
        }
      }
     

    });
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }


  construct(action){
     let form = this.fb.group({
        codigo: [{value: action == "new" ? "" : action == "edit" ? "3124" : "2312",disabled: true},Validators.required] ,
        descMsg: [{value: action == "new" ? "" : action == "edit" ? "Teste Mensagem EDIT" : "Teste Mensagem Show",disabled: action == "show"},Validators.required],
        tipoMsg: [{value:action == "new" ? "" : action == "edit" ? "VALIDA" : "VALIDA SHOW",disabled: action == "show"},Validators.required],
        status: [{value: action == "new" ? "" : action == "edit" ? "sitOK" : "sitOK",disabled: action == "show"},Validators.required],
        dataCadastro: Date.now,
        usuarioResponsavel: "Nome - Teste - AL2E"

     })
     return form;
  }

  submit(){
    alert("Esse formulário é valido? " + this.mainForm.valid);
    this.routing.navigate(['Mensagem']);
  }

}
