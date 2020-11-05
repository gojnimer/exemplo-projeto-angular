import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inclusion-analysis-model-rules',
  templateUrl: './inclusion-analysis-model-rules.component.html',
  styleUrls: ['./inclusion-analysis-model-rules.component.css']
})
export class InclusionAnalysisModelRulesComponent implements OnInit {

  title:String = "Inclusão de Regra na Receita Federal";
  modelo: String = '3 - Modelo de Análise';
  processo: String = '1 - Teste';

  constructor() { }

  ngOnInit() {
  }

}
