import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-federal-recipe',
  templateUrl: './list-federal-recipe.component.html',
  styleUrls: ['./list-federal-recipe.component.css']
})
export class ListFederalRecipeComponent implements OnInit {

  title = 'Listagem Receita Federal';

  dadosReceita = [];
  pag  = 1 ;
  contador = 5;

  constructor() { }

  ngOnInit() {
    this.dadosReceita = [
      { 'idregra': 1, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 2, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 3, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 4, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 5, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 6, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 7, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 8, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 9, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 10, 'regra': '12 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 11, 'regra': '13 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 12, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 13, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 14, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 15, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 16, 'regra': '15 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 17, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 18, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 19, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' },
      { 'idregra': 20, 'regra': '10 - Receita Federal Código 1', 'statusReceita': '1 - SUSPENSA/CANCELADA', 'dataCadastro': '10/09/2017 15:52:47', 'usuario': 'Nome - Teste - AL2E' }
    ];
  }

  pageChanged(event) {
    this.pag = event;
  }

}
