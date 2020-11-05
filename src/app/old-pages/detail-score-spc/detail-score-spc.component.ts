import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-score-spc',
  templateUrl: './detail-score-spc.component.html',
  styleUrls: ['./detail-score-spc.component.css']
})
export class DetailScoreSPCComponent implements OnInit {

  title = "Consulta Score SPC"

  dadosUsuario = [];
  pag = 1;
  contador = 5;

  constructor() { }

  ngOnInit() {

      this.dadosUsuario = [
      {'data' : '20/12/2016 08:54:34', 'usuarioresponsavel':'I908346 Nome - Teste - AL2E'},
    ];

  }

}
