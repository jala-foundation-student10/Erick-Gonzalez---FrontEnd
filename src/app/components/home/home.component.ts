import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { HomeServiceService } from 'src/app/services/home-service.service';
import * as _ from 'lodash';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Target } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any[] = []
  temp: any[] = [];

  @ViewChild(DatatableComponent) myFilterTable!: DatatableComponent;

  constructor(private service: HomeServiceService) { }

  

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers() {
    this.service.getUser().then((data: any) => {
      console.log(data);
      this.temp = data.results;
      this.user = data.results;
    },  
    (error) => {
      console.log(error);
    });
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.login.username.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.user = temp;
    // Whenever the filter changes, always go back to the first page
    this.myFilterTable.offset = 0;
  }
}
