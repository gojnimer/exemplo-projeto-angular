import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-modelo',
  templateUrl: './form-modelo.component.html',
  styleUrls: ['./form-modelo.component.css']
})
export class FormModeloComponent implements OnInit {
  mainForm:FormGroup;
  action:string;
  actionContext:string;
  GetAction:Subscription;

  constructor(private route:ActivatedRoute,private router:Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.GetAction = this.route.params.subscribe(param =>{
      switch(param.action){
        case 'new':
          this.action = param.action;
          this.mainForm = this.formBuilder(this.action);
          break;
        case 'edit':
          let id = this.route.snapshot.queryParams['id'];
          if(!id){
              this.router.navigate(['..']);
              break;
          }
          this.action = param.action;  
          this.actionContext = id;
          this.mainForm = this.formBuilder(this.action);
          break;
        default:
          this.router.navigate(['..']);
          break;
      }
    });
  }


 formBuilder(action){
    let form = this.fb.group({
    
      codModelo: [{value: action == 'new' ? '' : 'Teste Edit',disabled: action == "edit"},Validators.required],
      descModelo: [action == 'new' ? '' : 'Teste Edit',Validators.required]
    });
    return form;
 }

 submit(){
   alert(this.mainForm.valid);
 }

}
