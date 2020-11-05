import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-restritivo-serasa-form',
  templateUrl: './restritivo-serasa-form.component.html',
  styleUrls: ['./restritivo-serasa-form.component.css']
})
export class RestritivoSerasaFormComponent implements OnInit, OnDestroy {
 
  mainForm: FormGroup;
  action:string;
  editID: BehaviorSubject<string> = new BehaviorSubject(null);
  grauRestricao: string[] = ['grauRestrição','testando'];
  route: Subscription;
  inputGrauR:string;
  inputTipoR:string;




  constructor(private fb:FormBuilder ,private aRoute:ActivatedRoute,private routing:Router) { }

  ngOnInit() {
    

    this.route = this.aRoute.params.subscribe(param => 
      {
        if(param.action == "new"){
          this.action = "new";
          this.mainForm = this.fb.group({
            nomeRegra: ['',Validators.required],
            qtdOcorrencia: [''],
            qtdInterna:[''],
            score: [''],
            indicadorModelo: [''],
            modeloScore: [''],
            faixaInicial: [{value:'',disabled: true}],
            faixaFinal: [{value:'',disabled: true}],
            status:[''],
            grauRestricao: this.fb.array([]),
            tipoRestricao: this.fb.array([])
     
         });
          return;
        }
        if(param.action == "edit"){
          const id: any = this.aRoute.snapshot.queryParams['id'];
          if(id){
            this.action = "edit";
            this.mainForm = this.fb.group({
              nomeRegra: ['Teste Edit',Validators.required],
              qtdOcorrencia: ['Teste Edit'],
              qtdInterna:['Teste Edit'],
              score: [''],
              indicadorModelo: [''],
              modeloScore: ['Teste Edit'],
              faixaInicial: [{value:'Teste Edit',disabled: true}],
              faixaFinal: [{value:'Teste Edit',disabled: true}],
              status:[''],
              grauRestricao: this.fb.array(["Teste Edit","Teste Edit"]),
              tipoRestricao: this.fb.array([])
       
           });
          }else{
            this.routing.navigate(['RestrictiveSerasa']);
          }
          
          
        }
        if(param.action == "show"){
          this.action = "show"; 
          this.mainForm = this.fb.group({
            nomeRegra: [{value:'Teste Consulta',disabled: true}],
            qtdOcorrencia: [{value:'0',disabled: true}],
            qtdInterna:[{value:'0',disabled: true}],
            score: [{value:'',disabled: true}],
            indicadorModelo: [''],
            modeloScore: [{value:'Teste Consulta',disabled: true}],
            faixaInicial: [{value:'Teste Consulta',disabled: true}],
            faixaFinal: [{value:'Teste Consulta',disabled: true}],
            status:[{value:'',disabled: true}],
            grauRestricao: this.fb.array(["Teste Consulta","Teste Consulta"]),
            tipoRestricao: this.fb.array([])
     
         });
        }
      

      }
      );
      


  }
973426329

  IsValidId(id:string){
    if(id =="1" || id == "2"){
      return true;
    }
    return false;
  }
  

  submit(){
    console.log(this.mainForm);
  }

  addGrauR(i:string = null) {

    const control = this.mainForm.controls.grauRestricao.value;
    if(i != null){
      control.splice(i,1);
      return;
    }
    if(!this.inputGrauR){
      return;
    }
   
    control.push(this.inputGrauR);
  }
  addTipoR(i:string = null) {
    const control = this.mainForm.controls.tipoRestricao.value;
    if(i != null){
      control.splice(i,1);
      return;
    }
    if(!this.inputTipoR){
      return;
    }
   
    control.push(this.inputTipoR);
  }

  ngOnDestroy(){
    this.route.unsubscribe();
  }

}
