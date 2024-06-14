import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from '../state/user/user.state';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const store = inject(Store) as Store<{user:UserState}>
  const router = inject(Router);


  return store.select('user').pipe(
    map(userState=>{
      if(userState.user){
        return true
      }else{
        router.navigate(['/login']);
        return false;
      }
    })
  )


 
};
