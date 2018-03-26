import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabaseProvider } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: any;
  user:any = {
    email: '',
    password: ''
  }
  userInfo: any;
  authSvc: any;
  constructor(db: AngularFireDatabase, _authSvc: AuthService){
    this.users = db.list("/Users");
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
    }).catch((err) => console.log(err));
  }
  signInWithEmail(){
    this.authSvc.signInRegular(this.user.email, this.user.password).then((res:Response) =>{
      console.log('success email login')
    }).catch((err:Error) => console.log(err));
  }
  ngOnInit(){
    // this.addUser();
  }
}
