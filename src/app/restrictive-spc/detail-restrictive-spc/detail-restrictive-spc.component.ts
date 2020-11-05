import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-restrictive-spc',
  templateUrl: './detail-restrictive-spc.component.html',
  styleUrls: ['./detail-restrictive-spc.component.css']
})
export class DetailRestrictiveSpcComponent implements OnInit {

  title: string = "Consulta Restritivo SPC";
  dadosUsuario = [];

  constructor() { }

  ngOnInit() {
    this.dadosUsuario = [
      {'data' : '20/12/2016 08:54:34', 'usuarioresponsavel':'I908346 Nome - Teste - AL2E'},
    ];
  }

}
