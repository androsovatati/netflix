import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'netflix-movies-list-item',
  templateUrl: './movies-list-item.component.html',
  styleUrls: ['./movies-list-item.component.scss']
})
export class MoviesListItemComponent implements OnInit {

  @Input() movie: any;
  @Input() grid: string;

  public noImage: string = '../../../assets/images/no_img.jpg';

  constructor() { }

  ngOnInit() {
  }

}
