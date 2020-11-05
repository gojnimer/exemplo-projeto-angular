import { InclusionCreditAnalysisSimulationComponent } from './inclusion-credit-analysis-simulation/inclusion-credit-analysis-simulation.component';
import { DetailReviewResultComponent } from './detail-review-result/detail-review-result.component';
import { ListProposalDetailComponent } from './list-proposal-detail/list-proposal-detail.component';

import { AuthGuard } from './../auth/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const simulationRoutes: Routes = [
  { path: '',
    redirectTo: 'Result',
    pathMatch: 'full'
  },
  {path: 'Result', component: ListProposalDetailComponent , canActivate: [AuthGuard], data: {depth: 2}  },
  {path: 'Result/:id', component: DetailReviewResultComponent , canActivate: [AuthGuard], data: {depth: 3}  },
  {path: 'new', component: InclusionCreditAnalysisSimulationComponent , canActivate: [AuthGuard], data: {depth: 3}  },


];

@NgModule({
  imports: [RouterModule.forChild(simulationRoutes)],
  exports: [RouterModule]
})
export class SimulationRoutingModule { }
