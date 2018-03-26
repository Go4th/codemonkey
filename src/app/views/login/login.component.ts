import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabaseProvider } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';
import { RouterModule, Routes , Router} from '@angular/router';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: Router;
  users: any;
  user:any = {
    email: '',
    password: ''
  }
  userInfo: any;
  authSvc: any;
  constructor(db: AngularFireDatabase, _authSvc: AuthService, rt: Router){
    this.users = db.list("/Users");
    this.router = rt;
    console.log(this.users);
    this.authSvc = _authSvc
  }
  addUser(){
    this.userInfo = {
      Email: "test@maxor.com",
      IsAuthorized: false,
      RoleId: 0,
      UserId: 0o3
    }
    this.users.push(this.userInfo).then(_ => console.log('success'), this.userInfo='')
    .catch(err => console.log(err, 'You do not have access!'));
  }
  signInWithGoogle(){
    this.authSvc.signInWithGoogle().then((res:Response) =>{
      console.log('success')
      this.router.navigate(['/dashboard']);
    }).catch((err) => console.log(err));
  }
  signInWithEmail(){
    this.authSvc.signInRegular(this.user.email, this.user.password).then((res:Response) =>{
      console.log('success email login')
      this.router.navigate(['/dashboard']);
    }).catch((err:Error) => console.log(err));
  }
  ngOnInit(){
    // this.addUser();
  }

}
