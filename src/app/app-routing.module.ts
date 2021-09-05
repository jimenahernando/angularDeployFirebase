import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { PropertyFormComponent } from './components/property-form/property-form.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: "/home"},
  {path: 'home', component: HomeComponent },
  {path: 'details/:idProperty', component: PropertyDetailsComponent },
  {path: 'update/:idProperty', component: PropertyFormComponent },
  {path: 'newProperty', component: PropertyFormComponent },
  {path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
