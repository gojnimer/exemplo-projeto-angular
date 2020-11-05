import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { VanillaContainerComponent } from './../vanilla-container/vanilla-container.component';
import { TitleHeaderComponent } from './../title-header/title-header.component';
import { LoadingSpinnerComponent } from './../loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    TitleHeaderComponent,
    VanillaContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoadingSpinnerComponent,
    TitleHeaderComponent,
    VanillaContainerComponent
  ]
})
export class SharedComponentsModule { }
