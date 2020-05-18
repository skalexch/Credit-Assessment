import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Credit} from 'src/app/_models'
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
    
  firstName = new FormControl("", Validators.required);
  
  constructor(fb: FormBuilder) {
      this.form = fb.group({
          "firstName": this.firstName,
          "password":["", Validators.required]
      });
  }
  onSubmitModelBased() {
      console.log("model-based form submitted");
      console.log(this.form);
  }
}
