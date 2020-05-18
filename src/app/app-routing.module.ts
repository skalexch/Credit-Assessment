import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientInfoComponent } from './client-info/client-info.component';
import { PublicInterfaceComponent } from './public-interface/public-interface.component';
import { BankerInterfaceComponent } from './banker-interface/banker-interface.component';
import { LoginComponent } from './account/login.component';

const routes: Routes = [
  { path: 'public-interface', component: PublicInterfaceComponent},
  { path: 'banker-interface', component: BankerInterfaceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
