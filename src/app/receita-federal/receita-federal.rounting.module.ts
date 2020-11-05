import { EditionFederalRecipeComponent } from './edition-federal-recipe/edition-federal-recipe.component';
import { DetailFederalRecipeComponent } from './detail-federal-recipe/detail-federal-recipe.component';
import { InclusionRuleFederalRecipeComponent } from './inclusion-rule-federal-recipe/inclusion-rule-federal-recipe.component';
import { ListFederalRecipeComponent } from './list-federal-recipe/list-federal-recipe.component';


import { AuthGuard } from './../auth/auth-guard.service';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const receitaFederalRoutes: Routes = [
  {path: '', component: ListFederalRecipeComponent, canActivate: [AuthGuard], data: {depth: 2}  },
  {path: 'new', component: InclusionRuleFederalRecipeComponent, canActivate: [AuthGuard], data: {depth: 3}  },
  {path: 'show', component: DetailFederalRecipeComponent, canActivate: [AuthGuard], data: {depth: 3}  },
  {path: 'edit', component: EditionFederalRecipeComponent, canActivate: [AuthGuard], data: {depth: 3}  },

];

@NgModule({
  imports: [RouterModule.forChild(receitaFederalRoutes)],
  exports: [RouterModule]
})
export class ReceitaFederalRoutingModule { }
