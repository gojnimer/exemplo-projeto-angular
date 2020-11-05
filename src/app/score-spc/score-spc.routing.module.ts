import { FormScoreSpcComponent } from './form-score-spc/form-score-spc.component';
import { ListScoreSPCComponent } from './list-score-spc/list-score-spc.component';

import { AuthGuard } from './../auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const scoreSpcRoutes: Routes = [
   {path: '', component: ListScoreSPCComponent, canActivate: [AuthGuard], data: {depth: 2}  },
  { path: ':action', component: FormScoreSpcComponent , canActivate: [AuthGuard], data: {depth: 3}}

];

@NgModule({
  imports: [RouterModule.forChild(scoreSpcRoutes)],
  exports: [RouterModule]
})
export class ScoreSPCRoutingModule { }
