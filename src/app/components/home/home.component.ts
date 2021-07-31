import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { HomeServiceService } from 'src/app/services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any[] = []

  constructor(private service: HomeServiceService) { }

  ngOnInit(): void {
    this.listUsers();
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

}
