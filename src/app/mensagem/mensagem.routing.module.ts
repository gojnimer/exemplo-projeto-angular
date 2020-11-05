import { FormMensagemComponent } from './form-mensagem/form-mensagem.component';
import { ListMensagemComponent } from './list-mensagem/list-mensagem.component';
import { AuthGuard } from '../auth/auth-guard.service';


import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const mensagemRoutes: Routes = [
  {path: '', component: ListMensagemComponent , canActivate: [AuthGuard], data: {depth: 2}  },
  {path: ':action', component: FormMensagemComponent , canActivate: [AuthGuard], data: {depth: 3}  },
 

];

@NgModule({
  imports: [RouterModule.forChild(mensagemRoutes)],
  exports: [RouterModule]
})
export class MensagemRoutingModule { }
