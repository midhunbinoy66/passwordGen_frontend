import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiLoginRes, userLogin, userRegister } from '../model/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly http:HttpClient
  ) { }

  register(user:userRegister){
    return this.http.post('user/register',user);
  }

  login(user:userLogin):Observable<ApiLoginRes>{
    return this.http.post<ApiLoginRes>('user/login',user,  { withCredentials: true });
  }

  savePassword(passwordToStore:string){
    console.log(passwordToStore)
    return this.http.patch('user/savepassword',{passwordToStore},  { withCredentials: true })
  }


}
