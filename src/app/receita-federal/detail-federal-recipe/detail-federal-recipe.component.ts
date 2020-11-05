import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-federal-recipe',
  templateUrl: './detail-federal-recipe.component.html',
  styleUrls: ['./detail-federal-recipe.component.css']
})
export class DetailFederalRecipeComponent implements OnInit {

  title = "Consulta Receita Federal"

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
