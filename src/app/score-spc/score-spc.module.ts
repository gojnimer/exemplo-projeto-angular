import { FormScoreSpcComponent } from './form-score-spc/form-score-spc.component';
import { VerifyClientType } from './../filters/verify-client-type.filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListScoreApiService } from './list-score-spc/shared/list-score-api.service';
import { ListScoreSPCComponent } from './list-score-spc/list-score-spc.component';
import { ScoreSPCRoutingModule } from './score-spc.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [VerifyClientType,ListScoreSPCComponent,FormScoreSpcComponent],
  imports: [
    CommonModule,
    ScoreSPCRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ListScoreApiService]
})
export class ScoreSPCModule { }
