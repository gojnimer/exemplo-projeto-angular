
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MotivoRecusaRoutingModule } from './motivo-recusa.routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMotivoRecusaComponent } from './list-motivo-recusa/list-motivo-recusa.component';
import { ShowMotivoRecusaComponent } from './show-motivo-recusa/show-motivo-recusa.component';

@NgModule({
  declarations: [ListMotivoRecusaComponent, ShowMotivoRecusaComponent],
  imports: [
    CommonModule,
    MotivoRecusaRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ListMotivoRecusaComponent, ShowMotivoRecusaComponent]
})
export class MotivoRecusaModule { }
