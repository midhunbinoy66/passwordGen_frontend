import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logoutSuccess } from 'src/app/state/user/user.action';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(
    private store: Store,
    private router:Router
  ) {}

  logout(){
    document.cookie = '';
    this.store.dispatch(logoutSuccess());
    this.router.navigateByUrl('/login')
  }
}
