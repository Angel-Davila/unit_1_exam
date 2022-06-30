import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users_service/users.service';
import { CustomersService } from '../customers_service/customers.service';
import { ModulesServiceService } from '../modules_service/modules-service.service';
import { GroupsServiceService } from '../groups_service/groups-service.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  
  public usersArray: any;
  public customersArray: any;
  public modules: any;
  public groups: any;

  constructor(
    public usersService: UsersService,
    public customersService: CustomersService,
    public modulesService: ModulesServiceService,
    public groupsService: GroupsServiceService
  ) {  }

  ngOnInit(): void {
    this.usersArray = this.usersService.getUsersArray();
    this.customersArray = this.customersService.getCustomersArray();
    this.modules = this.modulesService.getModules();
    this.groups = this.groupsService.getGroups();
  }

  filterModules(idgroup: any) {
    return this.modules.filter(function(item: any){
      return item.idgroup == idgroup
    });
  }

  createMenu(): void {
    this.groups.forEach(value => {
      let groups_modules = {
        "idgroup": value.idgroup,
        "group_name": value.group_name,
        "modules":[this.filterModules(value.idgroup)]
      };
      
    });
  }
}
