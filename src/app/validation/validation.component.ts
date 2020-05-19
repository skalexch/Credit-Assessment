import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {

  clients$ = this.http.get('http://localhost:3000/api/clients');
  ​
  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    console.log(this.clients$);

  }

}

