import { DetailReviewResultComponent } from './detail-review-result/detail-review-result.component';
import { DetailProcessModalComponent } from './detail-review-result/detail-process-modal/detail-process-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListProposalDetailComponent } from './list-proposal-detail/list-proposal-detail.component';
import { InclusionCreditAnalysisSimulationComponent } from './inclusion-credit-analysis-simulation/inclusion-credit-analysis-simulation.component';
import { SimulationRoutingModule } from './simulation.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InclusionCreditAnalysisSimulationComponent,ListProposalDetailComponent,DetailProcessModalComponent,DetailReviewResultComponent],
  imports: [
    CommonModule,
    SimulationRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SimulationModule { }
