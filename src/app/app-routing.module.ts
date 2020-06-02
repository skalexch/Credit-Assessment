import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { PublicInterfaceComponent } from './public-interface/public-interface.component';
import { BankerInterfaceComponent } from './banker-interface/banker-interface.component';
import { LoginComponent } from './account/login.component';
import { ClienttypeComponent } from './clienttype/clienttype.component';
import { ClientIdComponent } from './client-id/client-id.component';
import { ResultPublicComponent } from './result-public/result-public.component';
import { ResultComponent } from './result/result.component';
import { ValidationComponent } from './validation/validation.component';
import { PreloadedInfoComponent } from './preloaded-info/preloaded-info.component';


const routes: Routes = [
  { path: 'public-interface', component: PublicInterfaceComponent},
  { path: 'login', component: LoginComponent},
  { path: 'banker-interface', component: BankerInterfaceComponent},
  { path: 'clienttype', component: ClienttypeComponent},
  { path: 'id', component: ClientIdComponent},
  { path: 'prld', component: PreloadedInfoComponent},
  { path: 'result-public', component: ResultPublicComponent},
  { path: 'result', component: ResultComponent},
  { path: 'val', component: ValidationComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
