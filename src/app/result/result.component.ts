import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  risk: number = 0.8;
  interest: number = 0.08;
  verdict: boolean = true; 
  loading = false;
  constructor() { }

  ngOnInit(): void {
  }

}
