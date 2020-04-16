import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser:User;
  users:User[]
  constructor(private http:HttpClient) {
    this.selectedUser = new User()
   }
   getUsers(){
    return this.http.get(`http://localhost:3000`)
   }
   postUsers(user:User){
    return this.http.post(`http://localhost:3000`,user)
  }
  putUsers(user:User){
    return this.http.put(`http://localhost:3000/${user._id}`,user)
  }
  deleteUsers(_id:string){
    return this.http.delete(`http://localhost:3000/${_id}`)
  }
}
