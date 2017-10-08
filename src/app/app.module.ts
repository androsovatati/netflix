import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';

import { MoviesService } from './services/movies.service';
import { ContactsService } from "./services/contacts.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./activities/home/home.component";
import { MovieComponent } from "./activities/movie/movie.component";
import { AboutComponent } from './activities/about/about.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListItemComponent } from './components/movies-list-item/movies-list-item.component';
import { SeasonListComponent } from './components/season-list/season-list.component';
import { SeasonListItemComponent } from './components/season-list-item/season-list-item.component';
import { ContactsViewComponent } from './components/contacts-view/contacts-view.component';
import { ContactsEditComponent } from './components/contacts-edit/contacts-edit.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviesSortPipe } from './pipes/movies-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    MoviesListComponent,
    MoviesListItemComponent,
    SeasonListComponent,
    SeasonListItemComponent,
    AboutComponent,
    ContactsViewComponent,
    ContactsEditComponent,
    SearchComponent,
    NavbarComponent,
    MoviesSortPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [MoviesService, ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
