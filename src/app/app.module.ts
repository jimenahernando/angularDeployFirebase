import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { PropertyFormComponent } from './components/property-form/property-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyDetailsComponent,
    PropertyCardComponent,
    PropertyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
