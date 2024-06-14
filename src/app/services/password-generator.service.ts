import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordGeneratorService {

  constructor() { }

  generatePassword(length:number,options:{upper:boolean,lower:boolean,number:boolean,symbol:boolean}){
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = '';
    if (options.upper) allChars += upperChars;
    if (options.lower) allChars += lowerChars;
    if (options.number) allChars += numberChars;
    if (options.symbol) allChars += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
    return password;

  }
}
