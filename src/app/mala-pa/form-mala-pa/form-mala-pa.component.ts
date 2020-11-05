import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-mala-pa',
  templateUrl: './form-mala-pa.component.html',
  styleUrls: ['./form-mala-pa.component.css']
})
export class FormMalaPaComponent implements OnInit {

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
            this.routing.navigate(['..']);
            break;
          }
          this.contextID = this.route.snapshot.queryParams['id'];
          this.action = "edit";
          this.mainForm = this.construct(this.action);
          break;

        }
        case "show": {
          if(!this.route.snapshot.queryParams['id']){
            this.routing.navigate(['..']);
            break;
          }
          this.contextID = this.route.snapshot.queryParams['id'];
          this.action = "show";
          this.mainForm = this.construct(this.action);
          break;
        }
        default: {
          this.routing.navigate(['..']);
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
        desc: [{value: action == "new" ? "" : action == "edit" ? "MALA CENTAURO" : "MALA CENTAURO TESTE",disabled: action == "show"},Validators.required] ,
        dataInicioVigencia: [{value: action == "new" ? "" : action == "edit" ? "13/07/2016" : "14/07/2016",disabled: action == "show"},Validators.required] ,
        dataFimVigencia: [{value: action == "new" ? "" : action == "edit" ? "31/01/2017" : "31/02/2017",disabled: action == "show"},Validators.required] ,
        prioridade: [{value: action == "new" ? "" : action == "edit" ? "1" : "1",disabled: action == "show"},Validators.required] ,
        tipoMala: [{value: action == "new" ? "" : action == "edit" ? "1" : "1",disabled: action == "show"},Validators.required] ,
        manterOutrasMalas: [{value: action == "new" ? "" : action == "edit" ? "sim" : "sim",disabled: action == "show"},Validators.required] ,
        status: [{value: action == "new" ? "" : action == "edit" ? "ativo" : "ativo",disabled: action == "show"},Validators.required] ,
        dataCadastro: Date.now,
        usuarioResponsavel: "Nome - Teste - AL2E"

     })
     return form;
  }

  submit(){
    alert("Esse formulário é valido? " + this.mainForm.valid);
    this.routing.navigate(['..']);
  }

}
