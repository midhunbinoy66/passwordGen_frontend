import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';
import { saveUserOnStore } from 'src/app/state/user/user.action';
import { UserState } from 'src/app/state/user/user.state';
export const emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup
  isSubmitted = false;

  constructor(
    private readonly fb:FormBuilder,
    private readonly userService:UserService,
    private readonly router:Router,
    private readonly store:Store<{user:UserState}>
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.pattern(emailPattern)]],
      password:['',[Validators.required]]
    })
  }


  onSubmit(){
    this.isSubmitted=true
    console.log(this.loginForm)
    if(!this.loginForm.invalid){
      let formData = this.loginForm.getRawValue()
      console.log(formData);
  
      this.userService.login(formData).subscribe({
        next:(data)=>{
          this.store.dispatch(saveUserOnStore({user:data.data}))
          localStorage.setItem('user',JSON.stringify(data.data))
          this.router.navigateByUrl('/home')
        }
      })
    }

  }

}
