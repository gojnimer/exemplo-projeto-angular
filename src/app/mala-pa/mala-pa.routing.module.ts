import { FormMalaPaComponent } from './form-mala-pa/form-mala-pa.component';
import { ListMalaPaComponent } from './list-mala-pa/list-mala-pa.component';
import { AuthGuard } from './../auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const malaPreAprovadaRoutes: Routes = [
  {path: '', component: ListMalaPaComponent, canActivate: [AuthGuard], data: {depth: 2}  },
  {path: ':action', component: FormMalaPaComponent, canActivate: [AuthGuard], data: {depth: 3}  },
 

];

@NgModule({
  imports: [RouterModule.forChild(malaPreAprovadaRoutes)],
  exports: [RouterModule]
})  
export class MalaPaRoutingModule { }
