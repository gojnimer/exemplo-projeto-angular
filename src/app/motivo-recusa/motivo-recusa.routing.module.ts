import { ShowMotivoRecusaComponent } from './show-motivo-recusa/show-motivo-recusa.component';
import { AuthGuard } from './../auth/auth-guard.service';
import { ListMotivoRecusaComponent } from './list-motivo-recusa/list-motivo-recusa.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const motivoRecusaRoutes: Routes = [
  {path: '', component: ListMotivoRecusaComponent, canActivate: [AuthGuard], data: {depth: 2}  },
  {path: ':id', component: ShowMotivoRecusaComponent, canActivate: [AuthGuard], data: {depth: 3}  },
 

];

@NgModule({
  imports: [RouterModule.forChild(motivoRecusaRoutes)],
  exports: [RouterModule]
})
export class MotivoRecusaRoutingModule { }
