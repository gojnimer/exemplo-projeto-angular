import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestritivoSerasaRoutingModule } from './restritivo-serasa.routing.module';
import { RestritivoSerasaFormComponent } from './restritivo-serasa-form/restritivo-serasa-form.component';
import { ListRestritiveSerasaComponent } from './list-restritive-serasa/list-restritive-serasa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ListRestritiveSerasaComponent,
    RestritivoSerasaFormComponent
  ],
  imports: [
    CommonModule,
    RestritivoSerasaRoutingModule,
    
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RestritivoSerasaModule { }
