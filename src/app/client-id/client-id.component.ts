import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-client-id',
  templateUrl: './client-id.component.html',
  styleUrls: ['./client-id.component.css']
})
export class ClientIdComponent  {
  loading = false;
  submitted = false;
  form: FormGroup;
    
  clientId = new FormControl("", Validators.required);
  
  constructor(fb: FormBuilder) {
      this.form = fb.group({
          "clientId": this.clientId,

      });
  }

onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.form.invalid) {
      return;
  }
  this.loading = true;
  console.log("model-based form submitted");
  console.log(this.form);
  console.warn(this.form.value);
}
}