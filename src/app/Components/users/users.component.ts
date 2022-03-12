import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/User';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'displayUsers',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public totalUser:number = 0

  public dataUsers: Users[] = [];

  public searchText:any=''


  constructor(private router:Router,private httpClient:HttpService) { }

  ngOnInit(): void {
    this.loadData()
  }

  public loadData(){
    this.httpClient.getUser().subscribe(data=> {
      console.log('GET',data);
      this.dataUsers = data
      this.totalUser = data.length
    })
  }

  public goToForm():void {
    this.router.navigate(['user-form'])
  }

  public viewUser(id:number){
    this.router.navigate([`user-form/${id}`])

  }

  public deleteUser(id:number){
this.httpClient.deleteUser(id).subscribe(data=>{
  console.log(data);
  this.loadData()
})
  }
  public editUser(id:number){
    this.router.navigate([`user-form/${id}`])
  }


}
