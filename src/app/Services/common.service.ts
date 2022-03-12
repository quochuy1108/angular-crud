import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  //  activeModal:any = false;
   activeModal$ = new BehaviorSubject<any>(false)
   isLoggedIn:boolean = false
   isLoggedIn$ = new BehaviorSubject<any>(false)

  constructor() {}

  public setActiveModal(payload:any):void{
    this.activeModal$.next(payload)
  }

   setLoggedIn(payload:boolean){
    this.isLoggedIn = payload
    console.log('loginCommon',this.isLoggedIn);
    this.isLoggedIn$.next(payload)
  }



   getToken():boolean{
    if(localStorage.getItem('token')) return true;
  return false;
}
}
