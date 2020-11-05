import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-contingency',
  templateUrl: './detail-contingency.component.html',
  styleUrls: ['./detail-contingency.component.css']
})
export class DetailContingencyComponent implements OnInit {

  title = "Consulta Contingência"

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
