import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder,Validators  } from '@angular/forms';
import { HttpService } from 'src/app/Services/http.service';
import {Users} from '../../model/User'
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public title:string = 'Thêm 01 nhân viên mới'
  public text__btn:string = ''

  public className:string='d'

  public infoMember = this.fb.group({
    id:[null],
    phone:[null,[Validators.required,Validators.pattern('[0-9 ]*'),Validators.minLength(10),Validators.maxLength(10)]],
    image:[null],
    name:[null,[Validators.required,Validators.minLength(2)]],
    email:[null,[Validators.required,Validators.email]],
    level:[null,[Validators.required]],

  });

  constructor( private location: Location,private fb: FormBuilder,private httpClient: HttpService,private route:ActivatedRoute,private common: CommonService) { }

get form() {
  return this.infoMember.controls
}



  ngOnInit(): void {
    const idParam = +this.route.snapshot.params['id']
    if(idParam){
      this.text__btn = 'Xác nhận và thay đổi'
      this.httpClient.getUserById(idParam).subscribe(data=> {
        console.log('getUserById',data);
        this.infoMember.setValue({
          id:data.id,
          phone:data.phone,
          image:data.image,
          name:data.name,
          email:data.email,
          level:data.level,
        })
      })
    }else {
      this.text__btn = 'Xác nhận và thêm mới'
  }
  console.log('form-controls',this.form);

  }


  public backHome() {
      this.location.back()
  }

  public submit():void {
    const idParam = +this.route.snapshot.params['id']
    const newUser = this.infoMember.value
    if(!this.infoMember.valid) return
    if(idParam){
      this.httpClient.editUser(newUser as Users,idParam).subscribe(data=>{
        console.log('have IdParam');
        console.log('UPDATE',data);
      })
      this.common.setActiveModal(true)

    }else {
      console.log('no IdParam');

      this.httpClient.addUser(newUser as Users).subscribe(data=>{
        console.log('ADD',data);

      })
      this.infoMember.reset()
      this.common.setActiveModal(true)
    }


  }

}
