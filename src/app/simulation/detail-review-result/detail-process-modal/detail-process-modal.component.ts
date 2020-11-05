import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'detail-process-modal',
  templateUrl: './detail-process-modal.component.html',
  styleUrls: ['./detail-process-modal.component.css']
})
export class DetailProcessModalComponent implements OnInit {

  formDetalheProcesso: FormGroup;

  dadosProcesso = [];
  pag = 1;
  contador = 5;

  constructor(private formBuilder: FormBuilder) { }



  ngOnInit() {
    this.formDetalheProcesso = this.formBuilder.group({
      processo: ['Teste Processo'],
      motivoRecusa: ['Motivo Recusa Teste'],
      resultadoAnalise: ['Aprovado'],
      fluxoInterrompido: ['Não'],
      mensagemAnalise: ['Teste Mensagem']
    });

    this.dadosProcesso = [{ 'codigo': '1 - Teste Regra', 'resultado': 'Aprovado', 'contingencia': 'Sem Contigência', 'motivoRecusa':'Motivo Recusa Teste' ,'interrupcao': 'Não' }];
  }

}
