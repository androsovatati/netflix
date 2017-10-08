import { MovieComponent } from './activities/movie/movie.component';
import { HomeComponent } from './activities/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./activities/about/about.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: HomeComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'movie',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
