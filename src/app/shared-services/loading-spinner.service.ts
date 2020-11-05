import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  LoadingEvent: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }
}
