import { HttpClient } from '@angular/common/http';
import { LoadingSpinnerService } from './shared-services/loading-spinner.service';
import { HierarchicalAnimation } from './route-animation';

import { AuthApiService } from './auth/login/auth-api.service';
import { Component, OnInit } from '@angular/core';
import { startWith, delay } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [HierarchicalAnimation]
  })
export class AppComponent implements OnInit{
  title = 'plataformaCreditoFoursys';
  canShow:boolean = false;
  isLoading:boolean = false;
  constructor(private logged:AuthApiService,private spinner:LoadingSpinnerService){

  }

  ngOnInit(){
    this.spinner.LoadingEvent.pipe(startWith(false),delay(0)).subscribe(running => { this.isLoading = running });
    this.logged.subjLoggedIn$.subscribe(log => {this.canShow = log});
    this.logged.subjLoggedIn$.next(true);
  }

 


  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
}

 

 
}
