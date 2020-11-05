import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parametro-analise-form',
  templateUrl: './parametro-analise-form.component.html',
  styleUrls: ['./parametro-analise-form.component.css']
})
export class ParametroAnaliseFormComponent implements OnInit, OnDestroy {
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
        totalProposta: [{value: action == "new" ? "" : action == "edit" ? "99" : "100",disabled: action == "show"},Validators.required] ,
        idadeMinima: [{value: action == "new" ? "" : action == "edit" ? "1" : "2",disabled: action == "show"},Validators.required],
        periodoTotal: [{value:action == "new" ? "" : action == "edit" ? "30" : "40",disabled: action == "show"},Validators.required],
        validadeAnalise: [{value: action == "new" ? "" : action == "edit" ? "30" : "40",disabled: action == "show"},Validators.required],
        rendaMinima: [{value: action == "new" ? "" : action == "edit" ? "300,00" : "400,00",disabled: action == "show"},Validators.required],
        idadeMinimaAdicional: [{value: action == "new" ? "" : action == "edit" ? "1" : "2",disabled: action == "show"},Validators.required],
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
