import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from './Components/users/users.component'
import {UserFormComponent} from './Components/user-form/user-form.component'
import { LoginComponent } from './Components/login/login.component';
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  { path: 'home', component: UsersComponent,canActivate: [AuthGuard] },
  { path: 'user-form', component: UserFormComponent,canActivate: [AuthGuard]},
  { path: 'user-form/:id', component: UserFormComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo:'/login',pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
