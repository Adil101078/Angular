import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePassengerComponent } from './customers/update-passenger/update-passenger.component';
import { ViewPassengerComponent } from './customers/view-passenger/view-passenger.component';
import { UpdateAirlineComponent } from './airline/update-airline/update-airline.component';
import { ViewAirlineComponent } from './airline/view-airline/view-airline.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
 import { Angular2CsvModule } from 'angular2-csv';


@NgModule({
  declarations: [
    AppComponent,
    UpdatePassengerComponent,
    ViewPassengerComponent,
    UpdateAirlineComponent,
    ViewAirlineComponent,
    HomeComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    RouterModule,
     ReactiveFormsModule,
     HttpClientModule,
     Ng2SearchPipeModule,
     OrderModule,
      FormsModule ,
     NgxPaginationModule,
     Angular2CsvModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
