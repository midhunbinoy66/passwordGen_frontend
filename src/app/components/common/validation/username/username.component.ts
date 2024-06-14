import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent {

  @Input()
  nameControl:AbstractControl | null = null
  @Input()
  isSubmitted:boolean = false;
}
