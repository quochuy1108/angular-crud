import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public activeModal:any = false;
  public activeModal$ = new BehaviorSubject<any>(false)
  constructor() {}

  setActiveModal(payload:any):void{
    this.activeModal= payload
    this.activeModal$.next(payload)
  }
}
