import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormMalaPaComponent } from './form-mala-pa/form-mala-pa.component';
import { MalaPaRoutingModule } from './mala-pa.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMalaPaComponent } from './list-mala-pa/list-mala-pa.component';

@NgModule({
  declarations: [ListMalaPaComponent,FormMalaPaComponent],
  imports: [
    CommonModule,
    MalaPaRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MalaPaModule { }
