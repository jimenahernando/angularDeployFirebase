import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Formulario Template
import { FormsModule } from '@angular/forms';
// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
// COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { PropertyFormComponent } from './components/property-form/property-form.component';
import { AgmCoreModule } from '@agm/core';

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
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AgmCoreModule.forRoot(environment.googleMaps)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
