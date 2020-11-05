import { FormRestrictiveSpcComponent } from './form-restrictive-spc/form-restrictive-spc.component';
import { ListRestrictiveSpcComponent } from './list-restrictive-spc/list-restrictive-spc.component';



import { AuthGuard } from './../auth/auth-guard.service';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const restritivoSpcRoutes: Routes = [
  {path: '', component: ListRestrictiveSpcComponent, canActivate: [AuthGuard], data: {depth: 2}  },
  {path: ':action', component: FormRestrictiveSpcComponent, canActivate: [AuthGuard], data: {depth: 3}  },
 /*  
  {path: 'show', component: DetailFederalRecipeComponent, canActivate: [AuthGuard], data: {depth: 3}  },
  {path: 'edit', component: EditionFederalRecipeComponent, canActivate: [AuthGuard], data: {depth: 3}  }, */

];

@NgModule({
  imports: [RouterModule.forChild(restritivoSpcRoutes)],
  exports: [RouterModule]
})
export class RestrictiveSpcRoutingModule { }
