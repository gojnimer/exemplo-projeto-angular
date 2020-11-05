import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-score-spc',
  templateUrl: './form-score-spc.component.html',
  styleUrls: ['./form-score-spc.component.css']
})
export class FormScoreSpcComponent implements OnInit {

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
        tipoCliente: [{value: action == "new" ? "" : action == "edit" ? "Cliente" : "Cliente SHOW",disabled: action == "show"},Validators.required] ,
        desc: [{value: action == "new" ? "" : action == "edit" ? "78 - Score - SPC TST" : "78 - Score - SPC TST SHOW",disabled: action == "show"},Validators.required] ,
        modeloScoreSpc: [{value: action == "new" ? "" : action == "edit" ? "BU" : "BU SHOW",disabled: action == "show"},Validators.required] ,
        modeloBehavior: [{value: action == "new" ? "" : action == "edit" ? "18" : "18 SHOW",disabled: action == "show"},Validators.required] ,
        faixaScoreInicial: [{value: action == "new" ? "" : action == "edit" ? "0" : "0 SHOW",disabled: action == "show"},Validators.required] ,
        faixaScoreFinal: [{value: action == "new" ? "" : action == "edit" ? "78 - Score - SPC TST" : "78 - Score - SPC TST SHOW",disabled: action == "show"},Validators.required] ,
        idadeInicial: [{value: action == "new" ? "" : action == "edit" ? "18" : "18 SHOW",disabled: action == "show"},Validators.required] ,
        idadeFinal: [{value: action == "new" ? "" : action == "edit" ? "70" : "70 SHOW",disabled: action == "show"},Validators.required] ,
        tempoRelacionamento: [{value: action == "new" ? "" : action == "edit" ? "1" : "1 SHOW",disabled: action == "show"},Validators.required] ,
        tempoRelacionamentoFinal: [{value: action == "new" ? "" : action == "edit" ? "999" : "999 SHOW",disabled: action == "show"},Validators.required] ,
        faixaInicialRenda: [{value: action == "new" ? "" : action == "edit" ? "" : "SHOW",disabled: action == "show"},Validators.required],
        faixaFinalRenda: [{value: action == "new" ? "" : action == "edit" ? "" : "SHOW",disabled: action == "show"},Validators.required] 

        

     })
     return form;
  }

  submit(){
    alert("Esse formulário é valido? " + this.mainForm.valid);
    this.routing.navigate(['..']);
  }


}
