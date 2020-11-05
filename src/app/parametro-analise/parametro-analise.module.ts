import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ParametroAnaliseRoutingModule } from './parametro-analise.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListParametroAnaliseComponent } from './list-parametro-analise/list-parametro-analise.component';
import { ParametroAnaliseFormComponent } from './parametro-analise-form/parametro-analise-form.component';

@NgModule({
  declarations: [ListParametroAnaliseComponent,ParametroAnaliseFormComponent],
  imports: [
    CommonModule,
    ParametroAnaliseRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametroAnaliseModule { }
