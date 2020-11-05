import { SharedComponentsModule } from './shared-components/shared-components/shared-components.module';
import { LoadingSpinnerService } from './shared-services/loading-spinner.service';
// Import Modules here
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Bootstrap Module Configuration, import bootstrap components here
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

// Import components here
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NgxMaskModule } from 'ngx-mask';

//services
import { CpfValidatorService } from './filters/cpf-validator.service';

import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    SharedComponentsModule,
    NgCircleProgressModule.forRoot({}),// Specify ng-circle-progress as an import
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      validation: true,
    }),
    BrowserAnimationsModule
  ],

  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},CpfValidatorService,LoadingSpinnerService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
  