import { FormMensagemComponent } from './form-mensagem/form-mensagem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MensagemRoutingModule } from './mensagem.routing.module';
import { ListMensagemComponent } from './list-mensagem/list-mensagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListMensagemComponent,FormMensagemComponent],
  imports: [
    CommonModule,
    MensagemRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ] 
  
})
export class MensagemModule { }
