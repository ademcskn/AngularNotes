import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';

@NgModule({
  //bir component kullanacağımız zaman buraya ekliyoruz.
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    CarComponent
  ],
  //bizim yazmadığım modulleri de buraya yazıyoruz.
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
