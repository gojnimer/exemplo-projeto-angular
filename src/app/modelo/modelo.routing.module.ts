import { FormModelContigencyComponent } from './form-model-contigency/form-model-contigency.component';
import { ListModelContigencyComponent } from './list-model-contigency/list-model-contigency.component';
import { FormModelRulesComponent } from './form-model-rules/form-model-rules.component';
import { ListModelRulesComponent } from './list-model-rules/list-model-rules.component';
import { FormAssociatedProcessModelComponent } from './form-associated-process-model/form-associated-process-model.component';
import { ListAssociatedProcessModelComponent } from './list-associated-process-model/list-associated-process-model.component';
import { FormModeloComponent } from './form-modelo/form-modelo.component';
import { ConsultaModeloComponent } from './consulta-modelo/consulta-modelo.component';
import { ListAnalysisModelComponent } from './list-analysis-model/list-analysis-model.component';
import { AuthGuard } from './../auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const modeloRoutes: Routes = [
  {path: '', component: ListAnalysisModelComponent, canActivate: [AuthGuard], data: {depth: 2}  },
  {path: ':action', component: FormModeloComponent, canActivate: [AuthGuard], data: {depth: 3}  },
  {path: 'Consulta/:id', component: ConsultaModeloComponent , canActivate: [AuthGuard], data: {depth: 3}},
  {path: 'ProcessosAssociados/:idModelo', component: ListAssociatedProcessModelComponent, canActivate: [AuthGuard], data: {depth: 2}  },
  {path: 'ProcessosAssociados/:idModelo/:action', component: FormAssociatedProcessModelComponent, canActivate: [AuthGuard], data: {depth: 3}  },
  {path: 'ProcessosAssociados/:idModelo/Rules/:idProcesso', component: ListModelRulesComponent, canActivate: [AuthGuard], data: {depth: 2}  },
  {path: 'ProcessosAssociados/:idModelo/Rules/:idProcesso/:action', component: FormModelRulesComponent, canActivate: [AuthGuard], data: {depth: 3}  },
  {path: 'ProcessosAssociados/:idModelo/Contigency/:idProcesso', component: ListModelContigencyComponent, canActivate: [AuthGuard], data: {depth: 2}  },
  {path: 'ProcessosAssociados/:idModelo/Contigency/:idProcesso/:action', component: FormModelContigencyComponent, canActivate: [AuthGuard], data: {depth: 3}  }

];

@NgModule({
  imports: [RouterModule.forChild(modeloRoutes)],
  exports: [RouterModule]
})
export class ModeloRoutingModule { }
