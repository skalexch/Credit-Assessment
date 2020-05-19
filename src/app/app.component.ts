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
}