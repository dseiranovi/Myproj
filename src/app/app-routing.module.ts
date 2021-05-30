import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component'
import { IndexComponent} from './index/index.component'
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
  {path: '',   redirectTo: '/index', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'index', component:IndexComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
