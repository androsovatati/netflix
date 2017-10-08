import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Contacts } from '../../classes/contacts.class';

@Component({
  selector: 'netflix-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.scss']
})
export class ContactsEditComponent implements OnInit {

  @Input() contacts: Contacts;
  @Output() buttonPressed: EventEmitter<string>;

  constructor() {
    this.buttonPressed = new EventEmitter();
  }

  ngOnInit() {

  }

  onClick(action: string): void {
    this.buttonPressed.emit(action);
  }

}
