import { Component } from '@angular/core';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.sass']
})
export class AppLoginComponent {
  username : string ="";
  password : string ="";
  show: boolean= false;
  submit(){
  console.log("user name is " + this.username)
  this.clear();
  }
  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
  }
}
