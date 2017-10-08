import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { MoviesService } from "../../services/movies.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'netflix-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  private _idSubscription: Subscription;
  public movie: any;
  public seasons: any;
  public summary: any;
  
  private _movieSubscription: Subscription;
  private _seasonsSubscription: Subscription;

  constructor(private _moviesService: MoviesService, private _route: ActivatedRoute, private _sanitizer: DomSanitizer) { 
  }

  ngOnInit() {
    this._idSubscription = this._route.params.subscribe((params: any) => {
      this._movieSubscription = this._moviesService.queryMovie(params.id).subscribe((movie: any) => {
        this.movie = movie;
        this.summary = this._sanitizer.bypassSecurityTrustHtml(movie.summary);
      });
      this._seasonsSubscription = this._moviesService.querySeasons(params.id).subscribe((seasons: any) => {
        this.seasons = seasons;
      });
    });
  }

  ngOnDestroy() {
    this._idSubscription.unsubscribe();
    if (this._movieSubscription) { this._movieSubscription.unsubscribe; }
  }

  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
