import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder,Validators,FormGroup  } from '@angular/forms';
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
    memberCode:[null,[Validators.required]],
    image:[null],
    name:[null,[Validators.required]],
    gender:[null,[Validators.required]],
    level:[null,[Validators.required]],

  });

  constructor( private location: Location,private fb: FormBuilder,private httpClient: HttpService,private route:ActivatedRoute,private common: CommonService) { }

  ngOnInit(): void {
    const idParam = +this.route.snapshot.params['id']
    if(idParam){
      this.text__btn = 'Xác nhận và thay đổi'
      this.httpClient.getUserById(idParam).subscribe(data=> {
        console.log('getUserById',data);
        this.infoMember.setValue({
          id:data.id,
          memberCode:data.memberCode,
          image:data.image,
          name:data.name,
          gender:data.gender,
          level:data.level,
        })
      })
    }else {
      this.text__btn = 'Xác nhận và thêm mới'
  }
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
      this.infoMember.setValue({
        id:' ',
        memberCode:' ',
        image:' ',
        name:' ',
        gender:' ',
        level:' ',
      })
      this.common.setActiveModal(true)
    }
    this.common.setActiveModal(true)

    console.log('user-form',this.common.activeModal);

  }

}
