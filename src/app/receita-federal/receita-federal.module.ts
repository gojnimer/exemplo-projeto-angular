import { EditionFederalRecipeComponent } from './edition-federal-recipe/edition-federal-recipe.component';
import { DetailFederalRecipeComponent } from './detail-federal-recipe/detail-federal-recipe.component';
import { InclusionRuleFederalRecipeComponent } from './inclusion-rule-federal-recipe/inclusion-rule-federal-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReceitaFederalRoutingModule } from './receita-federal.rounting.module';
import { ListFederalRecipeComponent } from './list-federal-recipe/list-federal-recipe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListFederalRecipeComponent,InclusionRuleFederalRecipeComponent,DetailFederalRecipeComponent,EditionFederalRecipeComponent],
  imports: [
    CommonModule,
    ReceitaFederalRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReceitaFederalModule { }
