import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { LoginComponent } from './account/login.component';
import { ResultComponent } from './result/result.component';
import { BankerInterfaceComponent } from './banker-interface/banker-interface.component';
import { PublicInterfaceComponent } from './public-interface/public-interface.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientInfoComponent,
    LoginComponent,
    ResultComponent,
    BankerInterfaceComponent,
    PublicInterfaceComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
