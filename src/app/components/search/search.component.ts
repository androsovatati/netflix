import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'netflix-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public query: string;

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  public search() {

    if (this.query) {
      this.router.navigateByUrl('/search?q=' + this.query);
      this.query = '';
    } else {
      return false;
    }
  }
}
