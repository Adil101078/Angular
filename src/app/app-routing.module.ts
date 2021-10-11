import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateAirlineComponent } from './airline/update-airline/update-airline.component';
import { ViewAirlineComponent } from './airline/view-airline/view-airline.component';
import { UpdatePassengerComponent } from './customers/update-passenger/update-passenger.component';
import { ViewPassengerComponent } from './customers/view-passenger/view-passenger.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'airlines', component:ViewAirlineComponent},
  { path: 'updateAirline/:id', component:UpdateAirlineComponent},
  { path: '', component:HomeComponent},
  { path: 'viewAirline/:id', component:ViewAirlineComponent},
  { path: 'updatePassenger/:id', component:UpdatePassengerComponent},
  { path: 'viewPassenger/:id', component:ViewPassengerComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
