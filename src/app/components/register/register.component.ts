import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { emailPattern } from '../login/login.component';
import { Router } from '@angular/router';
const usernamePattern = '^(?!.*[-_]{2})[a-zA-Z0-9]([-_]{0,1}[a-zA-Z0-9]){2,15}$';
const userPasswordPattern =`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$`
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm!:FormGroup
isSubmitted = false;

  constructor(
    private readonly userService:UserService,
    private readonly fb:FormBuilder,
    private readonly router:Router
  ){}


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userName:['',[Validators.required,Validators.pattern(usernamePattern),Validators.minLength(3),Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.pattern(emailPattern)]],
      password:['',[Validators.required,Validators.pattern(userPasswordPattern)]]
    })
  }

  onSubmit(){
    this.isSubmitted = true
    if(this.registerForm.valid){
      let formData = this.registerForm.getRawValue();
      console.log(formData)
      this.userService.register(formData).subscribe({
        next:(data)=>{
          console.log(data);
          this.router.navigateByUrl('/login')
        }
      })
    }else{
      console.log('invalid inputs')
    }

  }

}
