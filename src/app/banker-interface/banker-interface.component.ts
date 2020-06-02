import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pub } from '../public-interface/pub';
import { ScoringService } from '../public-interface/scoring.service';
import { FormGroup, FormControl, Validators, FormBuilder } 
from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-banker-interface',
  templateUrl: './banker-interface.component.html',
  styleUrls: ['./banker-interface.component.css']
})
export class BankerInterfaceComponent  {
  form: FormGroup;
    
  pub: pub = new pub();
  x: any;

  constructor(fb: FormBuilder, private router:Router,private scoring:ScoringService) {
      
  }


  
  func(){
    
    this.scoring.postScore(this.pub)
        .subscribe(
         value => {
           console.log(value);
           this.x = value;
         }       
         , () => {
          console.log('POST connected - now completed.');
      
        });

    this.router.navigate(['result'] , {state:{ val_ret : this.x }} ) ; 
    }
  
  onSubmitModelBased() {
      console.log("model-based form submitted");
      console.log(this.form);
      console.warn(this.form.value);

  }
}