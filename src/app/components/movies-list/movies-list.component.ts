import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'netflix-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})

export class MoviesListComponent implements OnInit {

  @Input() movies: Array<any>;

  public gridType = 'tile';  
  public sortType = 'rating';
  public ascending = false;

  constructor() { }

  ngOnInit() {
  }
}