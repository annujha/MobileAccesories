import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BackCoverComponent } from './back-cover/back-cover.component';
import { MobileAccesoriesComponent } from './mobile-accesories/mobile-accesories.component';
import { TemperedGlassComponent } from './tempered-glass/tempered-glass.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'back-cover',component:BackCoverComponent},
  {path:'mobile-accesories',component:MobileAccesoriesComponent},
  {path:'tempered-glass',component:TemperedGlassComponent},
  {path:'cart',component:CartComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
