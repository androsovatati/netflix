import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'netflix-season-list-item',
  templateUrl: './season-list-item.component.html',
  styleUrls: ['./season-list-item.component.scss']
})
export class SeasonListItemComponent implements OnInit {

  @Input() season: any;

  constructor() { }

  ngOnInit() {
  }

}
