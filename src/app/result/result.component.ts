import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  risk: number = window.history.state.val_ret;
  interest: number = window.history.state.val_ret ;

  verdict: boolean = true; 
  loading = false;
  constructor() { 
    
    
  }

  ngOnInit(): void {


  }

}
