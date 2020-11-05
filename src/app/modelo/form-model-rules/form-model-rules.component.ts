import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-model-rules',
  templateUrl: './form-model-rules.component.html',
  styleUrls: ['./form-model-rules.component.css']
})
export class FormModelRulesComponent implements OnInit {

  mainForm:FormGroup;
  routeSub:Subscription;
  action:string = null;
  modelo:string;
  processo:string;
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
      this.modelo = param.idModelo;
      this.processo = param.idProcesso;
     

    });
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }


  construct(action){
     let form = this.fb.group({
        codRegra: [{value: action == "new" ? "" : action == "edit" ? "1" : "2",disabled: action == "show"},Validators.required] ,
        acao: [{value: action == "new" ? "" : action == "edit" ? "1" : "2",disabled: action == "show"},Validators.required],
        interromper: [{value:action == "new" ? "" : action == "edit" ? "1" : "2",disabled: action == "show"},Validators.required],
        mensagem: [{value: action == "new" ? "" : action == "edit" ? "1" : "2",disabled: action == "show"},Validators.required],
        motivoRecusa: [{value: action == "new" ? "" : action == "edit" ? "1" : "2",disabled: action == "show"},Validators.required]
       

     });
     return form;
  }

  submit(){
    alert("Esse formulário é valido? " + this.mainForm.valid);
    this.routing.navigate(['..']);
  }
}
