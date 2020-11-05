import { FormModelContigencyComponent } from './form-model-contigency/form-model-contigency.component';
import { ListModelContigencyComponent } from './list-model-contigency/list-model-contigency.component';
import { FormModelRulesComponent } from './form-model-rules/form-model-rules.component';
import { ListModelRulesComponent } from './list-model-rules/list-model-rules.component';
import { FormAssociatedProcessModelComponent } from './form-associated-process-model/form-associated-process-model.component';
import { ListAssociatedProcessModelComponent } from './list-associated-process-model/list-associated-process-model.component';
import { FormModeloComponent } from './form-modelo/form-modelo.component';
import { ConsultaModeloComponent } from './consulta-modelo/consulta-modelo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModeloRoutingModule } from './modelo.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAnalysisModelComponent } from './list-analysis-model/list-analysis-model.component';

@NgModule({
  declarations: [
    ListAnalysisModelComponent,
    ConsultaModeloComponent,
    FormModeloComponent,
    ListAssociatedProcessModelComponent,
    FormAssociatedProcessModelComponent,
    ListModelRulesComponent,
    FormModelRulesComponent,
    ListModelContigencyComponent,
    FormModelContigencyComponent
  ],
  imports: [
    CommonModule,
    ModeloRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ModeloModule { }
