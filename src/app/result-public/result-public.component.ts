import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-public',
  templateUrl: './result-public.component.html',
  styleUrls: ['./result-public.component.css']
})
export class ResultPublicComponent implements OnInit {
  risk: number = 0.8;
  verdict: boolean = true; 
  constructor() { }

  ngOnInit(): void {
  }

}
