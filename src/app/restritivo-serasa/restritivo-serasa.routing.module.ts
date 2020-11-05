import { RestritivoSerasaFormComponent } from './restritivo-serasa-form/restritivo-serasa-form.component';
import { ListRestritiveSerasaComponent } from './list-restritive-serasa/list-restritive-serasa.component';
import { AuthGuard } from './../auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const restritivoRoutes: Routes = [
  {path: '', component: ListRestritiveSerasaComponent, canActivate: [AuthGuard], data: {depth: 2}  },
  { path: ':action', component: RestritivoSerasaFormComponent , canActivate: [AuthGuard], data: {depth: 3}}

];

@NgModule({
  imports: [RouterModule.forChild(restritivoRoutes)],
  exports: [RouterModule]
})
export class RestritivoSerasaRoutingModule { }
