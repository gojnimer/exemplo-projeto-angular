import { FormRestrictiveSpcComponent } from './form-restrictive-spc/form-restrictive-spc.component';
import { ListRestrictiveSpcComponent } from './list-restrictive-spc/list-restrictive-spc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RestrictiveSpcRoutingModule } from './restrictive-spc.rounting.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListRestrictiveSpcComponent,FormRestrictiveSpcComponent],
  imports: [
    CommonModule,
    RestrictiveSpcRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RestrictiveSpcModule { }
