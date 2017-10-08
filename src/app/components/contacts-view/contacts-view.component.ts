import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contacts } from '../../classes/contacts.class';

@Component({
  selector: 'netflix-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.scss']
})
export class ContactsViewComponent implements OnInit {

  @Input() contacts: Contacts;
  @Output() editModeChanged: EventEmitter<any>;

  constructor() { 
    this.editModeChanged = new EventEmitter();
  }

  ngOnInit() {
  }

  toggleEditMode(): void {
    this.editModeChanged.emit();
  }
}
