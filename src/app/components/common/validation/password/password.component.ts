import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  @Input()
  isSubmitted:boolean =false;
  @Input()
  passwordControl:AbstractControl | null = null
}
