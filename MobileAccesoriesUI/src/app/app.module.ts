import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { HomeComponent } from './home/home.component';
import { BackCoverComponent } from './back-cover/back-cover.component';
import { TemperedGlassComponent } from './tempered-glass/tempered-glass.component';
import { MobileAccesoriesComponent } from './mobile-accesories/mobile-accesories.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    BackCoverComponent,
    TemperedGlassComponent,
    MobileAccesoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
