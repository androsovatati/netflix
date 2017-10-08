import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MoviesService } from "../../services/movies.service";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'netflix-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public movies: any;
  public query: string = '';
  
  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private _ms: MoviesService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.querySubscription = this._route.queryParams.subscribe((queryParam: any) => {
      this.query = queryParam['q'] || '';
      this.movies = this._ms.queryMovies(this.query);        
    });
  }

  ngOnDestroy(){
		this.querySubscription.unsubscribe();
	}
}
