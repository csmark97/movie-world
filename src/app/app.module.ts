import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviebrowserComponent } from './moviebrowser/moviebrowser.component';
import { MovieService } from './services/movie.service';
import { ActorService } from './services/actor.service';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { Routes } from '@angular/router';
import { ActordetailsComponent } from './actordetails/actordetails.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviebrowserComponent,
    MoviedetailsComponent,
    ActordetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MovieService, ActorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
