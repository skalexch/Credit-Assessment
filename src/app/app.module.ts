import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login.component';
import { ResultComponent } from './result/result.component';
import { BankerInterfaceComponent } from './banker-interface/banker-interface.component';
import { PublicInterfaceComponent } from './public-interface/public-interface.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienttypeComponent } from './clienttype/clienttype.component';
import { ClientIdComponent } from './client-id/client-id.component';
import { PreloadedInfoComponent } from './preloaded-info/preloaded-info.component';
import { ResultPublicComponent } from './result-public/result-public.component';
import { ValidationComponent } from './validation/validation.component';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { FormsModule } from '@angular/forms';


@NgModule({
  
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ResultComponent,
    BankerInterfaceComponent,
    PublicInterfaceComponent,
    ClienttypeComponent,
    ClientIdComponent,
    PreloadedInfoComponent,
    ResultPublicComponent,
    ValidationComponent,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

],  

  bootstrap: [AppComponent]
})




export class AppModule { }


