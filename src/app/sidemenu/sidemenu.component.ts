import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users_service/users.service';
import { CustomersService } from '../customers_service/customers.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  
  public usersArray: any;
  public customersArray: any;

  constructor(
    public usersService: UsersService,
    public customersService: CustomersService
  ) {  }

  ngOnInit(): void {
    this.usersArray = this.usersService.getUsersArray();
    this.customersArray = this.customersService.getCustomersArray();
  }

}
