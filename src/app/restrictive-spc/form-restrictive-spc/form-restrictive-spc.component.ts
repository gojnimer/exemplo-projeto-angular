import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-restrictive-spc',
  templateUrl: './form-restrictive-spc.component.html',
  styleUrls: ['./form-restrictive-spc.component.css']
})
export class FormRestrictiveSpcComponent implements OnInit {

  mainForm:FormGroup;
  routeSub:Subscription;
  action:string = null;

  contextID:string = null;
  inputRestricao:string;
  

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
        nomeRegra: [{value: action == "new" ? "" : action == "edit" ? "Teste 23 06 2016 - TST" : "Teste 23 06 2016 - TST SHOW",disabled: action == "show"},Validators.required] ,
        qtdDiasOcorrencia: [{value: action == "new" ? "" : action == "edit" ? "23" : "23 SHOW",disabled: action == "show"},Validators.required] ,
        valorRestricaoInicial: [{value: action == "new" ? "" : action == "edit" ? "23,06" : "23,06 SHOW",disabled: action == "show"},Validators.required] ,
        valorRestricaoFinal: [{value: action == "new" ? "" : action == "edit" ? "23,07" : "23,07 SHOW",disabled: action == "show"},Validators.required] ,
        tipoRestricao: action == "new" ? this.fb.array([]) : action == "edit" ? this.fb.array(["Restrição Teste"]) : this.fb.array(["Restrição Teste SHOW"]) ,
        

        

     })
     return form;
  }

  addRestr(i:string = null) {

    const control = this.mainForm.controls.tipoRestricao.value;
    if(i != null){
      control.splice(i,1);
      return;
    }
    if(!this.inputRestricao){
      return;
    }
   
    control.push(this.inputRestricao);
  }

  submit(){
    alert("Esse formulário é valido? " + this.mainForm.valid);
    this.routing.navigate(['..']);
  }

}
