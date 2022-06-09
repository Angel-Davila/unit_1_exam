import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  public usersArray = [
    {
      "userID" : 1,
      "username" : "AngelDavila",
      "email" : "angel@mail.com"
    },
    {
      "userID" : 2,
      "username" : "MarcosMediano",
      "email" : "mediano@mail.com"
    }
    
  ]

  getUsersArray() {
    return this.usersArray;
  }
    
}
