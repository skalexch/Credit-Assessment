import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Credit-Assessment';
  serverData: JSON;
  employeeData: JSON;
  
  constructor(private httpClient: HttpClient) {
  }


  getscore() {
    this.httpClient.get('localhost:4200/score').subscribe(data => {
      this.employeeData = data as JSON;
      console.log(this.employeeData);
    })
  }
}