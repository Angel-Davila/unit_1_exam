import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupsServiceService {

  constructor() { }

  public groups = [
      { idgroup: 2, group_name: "users" },
      { idgroup: 3, group_name: "customers" },
      { idgroup: 4, group_name: "management" },
      { idgroup: 5, group_name: "sales" },
      { idgroup: 6, group_name: "reports" }
  ]

  getGroups(){
    return this.groups;
  }
}
