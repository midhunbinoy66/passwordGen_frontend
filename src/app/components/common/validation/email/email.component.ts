import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  @Input()
  isSubmitted = false;

  @Input()
  emailControl:AbstractControl | null = null
}
