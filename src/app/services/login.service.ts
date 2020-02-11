import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }
  loginUser(user:user){
    return this.http.post('http://localhost:3000/users/login',user);
  }
}
