import { ParametroAnaliseFormComponent } from './parametro-analise-form/parametro-analise-form.component';
import { AuthGuard } from './../auth/auth-guard.service';
import { ListParametroAnaliseComponent } from './list-parametro-analise/list-parametro-analise.component';


import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const parametroAnaliseRoutes: Routes = [
  {path: '', component: ListParametroAnaliseComponent, canActivate: [AuthGuard], data: {depth: 2}  },
  {path: ':action' , component: ParametroAnaliseFormComponent, canActivate: [AuthGuard], data: {depth: 3}  }
  
 

];

@NgModule({
  imports: [RouterModule.forChild(parametroAnaliseRoutes)],
  exports: [RouterModule]
})
export class ParametroAnaliseRoutingModule { }
