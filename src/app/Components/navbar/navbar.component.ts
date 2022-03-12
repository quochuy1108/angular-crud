import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

   isLoggedIn:boolean= false;


  constructor(private common:CommonService,private route:Router) { }


  ngOnInit():void {
    console.log('this is navbar login',this.isLoggedIn);
    this.isLoggedIn = this.common.getToken();
  }


  handleLogout(){
    localStorage.removeItem('token')
    this.isLoggedIn = false
    console.log('logout',this.isLoggedIn);
  }

}
