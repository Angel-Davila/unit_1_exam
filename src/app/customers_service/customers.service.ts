import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }
  public customersArray = [
    {
      "customerID" : 1,
      "name" : "Angel",
      "lastname" : "Davila",
      "email" : "angel@mail.com"
    },
    {
      "customerID" : 2,
      "name" : "Marcos",
      "lastname" : "Mediano",
      "email" : "mediano@mail.com"
    }
  ]

  getCustomersArray(){
    return this.customersArray;
  }
}
