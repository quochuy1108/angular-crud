import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  public accountNotFound:boolean = false
  public emailValue:any = null
  public isValueChange:boolean = false
  public errorInputActive:boolean = false
  public isValueSubmit = true
  public valueInput:string = ''

  public form = this.fb.group({
    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required,Validators.minLength(6)]]
  });

  get f(){
    return this.form.controls
  }

  constructor(private fb: FormBuilder,private route:Router,private common:CommonService) { }

  ngOnInit(): void {}

  submit():void{

    // if(!this.f['email'].value &&  !this.f['password'].value){
    //   this.isValueSubmit = false
    //   this.errorInputActive = true
    //   return
    // }

    if(this.f['email'].value === 'huy@gmail.com' && this.f['password'].value === '123456'){
      const token = 'token'
      localStorage.setItem('token',token)
      this.common.setLoggedIn(true)
      this.route.navigate(['/home'])
    }else {
      this.accountNotFound = true
    }

  }

  setInputChange(e:any,name:string){
    // console.log(name);
    // const inputValue = e.target.value
    // if(inputValue){
    //   this.isValueSubmit = true
    // }
    if(this.f[`${name}`].errors === null ){
      this.errorInputActive = false
      this.isValueSubmit = true
      console.log('isValueSubmit',this.isValueSubmit);

    }else {
      this.errorInputActive = true
    }

  }
  setInputBlur(e:any,name:any){
    // if(e.isTrusted){
    //   this.isValueSubmit = true
    // }

    if(this.f[`${name}`].errors === null){
      this.errorInputActive = false
    }else {
      this.errorInputActive = true
    }
  }


}
