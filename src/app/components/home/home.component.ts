import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUserRes } from 'src/app/model/user.interface';
import { PasswordGeneratorService } from 'src/app/services/password-generator.service';
import { UserService } from 'src/app/services/user.service';
import { savePassword } from 'src/app/state/user/user.action';
import { selectUserDetails } from 'src/app/state/user/user.selector';
import { UserState } from 'src/app/state/user/user.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  generatedPassword:string | null = null;
  passwords$!:Observable<string[]>;
  savedPasswords:string[]=[];
  user:IUserRes | null = null; 


  length= 12;
  options ={
    upper:true,
    lower:true,
    number:true,
    symbol:true
  };


  constructor(
    private readonly store:Store<{user:UserState}>,private readonly passwordService:PasswordGeneratorService,
    private readonly userService:UserService
  ){}

  ngOnInit(): void {
   this.store.select(selectUserDetails).subscribe((data)=>{
    this.user = data
   })
  }


  generatePassword(){
   this.generatedPassword= this.passwordService.generatePassword(this.length,this.options)
  }


  savePassword(){
    if(this.generatedPassword){
      this.store.dispatch(savePassword({password:this.generatedPassword}))

    }
  }


    // Method to copy the password to the clipboard
    copyToClipboard() {
      if (navigator.clipboard && window.isSecureContext && this.generatedPassword) {
        // Use the Clipboard API
        navigator.clipboard.writeText(this.generatedPassword).then(() => {
          console.log('Password copied to clipboard');
          alert('password coppied to clipoboard')
        }).catch(err => {
          console.error('Could not copy text: ', err);
        });
      } 
    }


}
