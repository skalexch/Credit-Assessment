import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-preloaded-info',
  templateUrl: './preloaded-info.component.html',
  styleUrls: ['./preloaded-info.component.css']
})

export class PreloadedInfoComponent {
  form: FormGroup;
    
  firstName = new FormControl("", Validators.required);
  lastName = new FormControl("", Validators.required);
  cin=new FormControl("", Validators.required);
  email=new FormControl("", Validators.required);
  situation=new FormControl("", Validators.required);
  kids=new FormControl("", Validators.required);
  birthday=new FormControl("", Validators.required);
  oldCredit=new FormControl("", Validators.required);
  annuity=new FormControl("", Validators.required);
  creditAmount=new FormControl("", Validators.required);
  creditPeriod=new FormControl("", Validators.required);


  
  constructor(fb: FormBuilder) {
      this.form = fb.group({
          "firstName": this.firstName,
          "lastName": this.lastName,
          "cin": this.cin,
          "email": this.email,
          "situation": this.situation,
          "kids": this.kids,
          "birthday": this.birthday,
          "oldCredit": this.oldCredit,
          "annuity": this.annuity,
          "creditAmount": this.creditAmount,
          "creditPeriod": this.creditPeriod

      });
      this.form.get("firstName").setValue("Ecole Polytechnique de Tunisie");
      this.form.get("lastName").setValue("EGES");
      this.form.get("cin").setValue("12345678");
      this.form.get("email").setValue("ept@rnu.tn");
      this.form.get("situation").setValue("Single");
      this.form.get("kids").setValue("3");
      this.form.get("birthday").setValue("26/07/1994");
      this.form.get("oldCredit").setValue("YES");
      this.form.get("annuity").setValue("10");
      this.form.get("creditAmount").setValue("1000");
      this.form.get("creditPeriod").setValue("10");

  }
  onSubmitModelBased() {
      console.log("model-based form submitted");
      console.log(this.form);
      console.warn(this.form.value);

  }

}
