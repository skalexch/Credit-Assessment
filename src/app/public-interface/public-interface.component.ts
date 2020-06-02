import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, NgModel } from '@angular/forms';
import { pub } from './pub';
import { ScoringService } from './scoring.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-public-interface',
  templateUrl: './public-interface.component.html',
  styleUrls: ['./public-interface.component.css']
  
})



export class PublicInterfaceComponent  {
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

    this.router.navigate(['result-public'] , {state:{ val_ret : this.x }} ) ; 
    }
  
  onSubmitModelBased() {
      console.log("model-based form submitted");
      console.log(this.form);
      console.warn(this.form.value);

  }



}
