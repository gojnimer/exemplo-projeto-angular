import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-associated-process-model',
  templateUrl: './form-associated-process-model.component.html',
  styleUrls: ['./form-associated-process-model.component.css']
})
export class FormAssociatedProcessModelComponent implements OnInit {
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
          this.mainForm = this.construct(this.action,param.idModelo);
          break;
        }
        case "edit": {
          
          if(!this.route.snapshot.queryParams['id']){
            this.routing.navigate(['Modelos','ProcessosAssociados',param.idModelo]);
            break;
          }
          this.contextID = this.route.snapshot.queryParams['id'];
          this.action = "edit";
          this.mainForm = this.construct(this.action,param.idModelo);
          break;

        }
        case "show": {
          if(!this.route.snapshot.queryParams['id']){
            this.routing.navigate(['Modelos','ProcessosAssociados',param.idModelo]);
            break;
          }
          this.contextID = this.route.snapshot.queryParams['id'];
          this.action = "show";
          this.mainForm = this.construct(this.action,param.idModelo);
          break;
        }
        default: {
          this.routing.navigate(['Modelos','ProcessosAssociados',param.idModelo]);
          break;  
        }
      }
     

    });
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }


  construct(action,n){
     let form = this.fb.group({
        codModelo: [{value:n ,disabled: true},Validators.required] ,
        descProcesso: [{value: action == "new" ? "" : action == "edit" ? "Modelo ABC" : "Modelo ABC SHOW",disabled: action == "show"},Validators.required],
        ordemExec: [{value:action == "new" ? "" : action == "edit" ? "1" : "2",disabled: action == "show"},Validators.required]
        

     })
     return form;
  }

  submit(){
    alert("Esse formulário é valido? " + this.mainForm.valid);
    
  }
}
