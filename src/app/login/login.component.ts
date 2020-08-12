import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

email;
pass;
permisson;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  auth ={
    "user1":{
      "email" : "Admin",
      "permisson" : "all",
      "password" : "Admin"
    },
    "user2":{
      "email" : "MyName",
      "permisson" : "none",
      "password" : "test"
    }

  }
  login(){

    for( let user in this.auth){     

      if(this.auth[user].email===this.email && this.auth[user].password===this.pass){
         localStorage.setItem('uid', this.email)
         
         this.permisson=this.auth[user].permisson;
 
         localStorage.setItem('per',this.permisson)
 
      }
     }
     if(this.permisson){
       
       this.router.navigateByUrl('/admin')
 
     }
     else{
       alert("you are not valid")
     }

  }

}
