import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HomeServiceService } from 'src/app/services/home-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any[] = []
  private tipoOrden: string = "login.username";
  // private _user: any[] = [];

  constructor(private service: HomeServiceService) { }

  

  ngOnInit(): void {
    this.listUsers();
    this.users();
  }

  listUsers() {
    this.service.getUser().then((data: any) => {
      console.log(data);
      this.user = data.results;
    },  
    (error) => {
      console.log(error);
    });
  }

  
  users() {
    var data = _.sortBy(this.user, this.tipoOrden);
    this.user = data;
    console.log("users click");
    return data
  }

  sort(tipoOrden: string) {
    this.tipoOrden = tipoOrden;
    this.users();
    console.log("click")
  }
}
