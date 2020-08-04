import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup;
  submitted = false;
  flagsCheck = false;
  message = "";

  constructor(private router: Router,
     private formBuilder :FormBuilder) { }

  ngOnInit(): void {
     this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  
 get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
      
    }
    
  }
 
   checkLogin(){
     this.flagsCheck = true;
    if(this.loginForm.controls['username'].value ==="kshama" && this.loginForm.controls['password'].value ==="123456"){
      // this.message ="login success"
      this.router.navigate(["/dashboard"]);
    }else{
      this.message ="Username or password is incorrect";
    }

  }

}
