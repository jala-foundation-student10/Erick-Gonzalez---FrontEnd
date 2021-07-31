import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  apiUrl = "https://randomuser.me/api/?results=15&inc=name,location,email,login"

  constructor(private http: HttpClient) { }

  getUser(){
      return new Promise(resolve => {
        this.http.get(this.apiUrl).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  }

}
