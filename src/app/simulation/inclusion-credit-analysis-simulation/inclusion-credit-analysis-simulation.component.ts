import { CpfValidatorService } from '../../filters/cpf-validator.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-inclusion-credit-analysis-simulation',
  templateUrl: './inclusion-credit-analysis-simulation.component.html',
  styleUrls: ['./inclusion-credit-analysis-simulation.component.css']
})
export class InclusionCreditAnalysisSimulationComponent implements OnInit {
  
  title = "Simulação - Análise de Credito";
  options: string[] = ["teste","teste2"];

  cpfError = false;
  modelError = false;
  simulationError = false;
 
  mainForm: FormGroup = this.fb.group({
    'simulation': ['',Validators.required],
    'cpf': ['', [this.validateCPF,Validators.required]],
    'model': ['',Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    

  }


  validateCPF(c : FormControl){
    var obj = new CpfValidatorService();
    const test = obj.cpf(c.value);
    return test ? null : {error: true};


  }


  submit(){
    this.cpfError = false;
    this.modelError = false;
    this.mainForm.updateValueAndValidity();
    if(!this.mainForm.valid){
      this.cpfError = !this.mainForm.controls.cpf.valid;
      this.modelError = !this.mainForm.controls.model.valid;
      this.simulationError = !this.mainForm.controls.simulation.valid;
      return;
    }
    alert(this.mainForm.valid);
    console.log(this.mainForm);
    
  }

}
