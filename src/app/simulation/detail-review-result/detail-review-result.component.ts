import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail-review-result',
  templateUrl: './detail-review-result.component.html',
  styleUrls: ['./detail-review-result.component.css']
})
export class DetailReviewResultComponent implements OnInit {


  formPessoa: FormGroup;

  title = "Consulta Resultado de Análise"

  dadosPessoa = [];
  dadosAnalise = [];
  pag = 1;
  contador = 5;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formPessoa = this.formBuilder.group({
      documento: ['999.999.999-99'],
      proposta: ['10'],
      motivoRecusa: ['Teste Motivo Recusa'],
      resultadoAnalise: ['Aprovado'],
      dataAnalise: ['31/12/2099 - 00:00:00'],
      modeloAnalisado: ['9999 - Teste Modelo'],
      preAprovado: ['Não'],
      fluxoInterrompido: ['Não'],
      valorAprovado: ['R$ 3.456.97']
    });

    this.dadosPessoa = [
      { 'id': 1, 'tipo': 'Titular', 'documento': '999.999.999-99' },
      { 'id': 2, 'tipo': 'Titular', 'documento': '999.999.999-99' }
    ];

    this.dadosAnalise = [
      { 'ordem': '1', 'processo': 'Score SPC', 'resultado': 'Aprovado', 'contingencia': 'Sem contingência' }
    ];
  }

}
