import { Component, ViewChild, OnInit } from '@angular/core';
import { ContactsService } from "../../services/contacts.service";
import { Contacts } from '../../classes/contacts.class';

@Component({
  selector: 'netflix-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  savedContacts: Contacts;
  editMode: boolean = false;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.saveCopy();
  }

  private saveCopy() {
    this.savedContacts = Object.assign({}, this.contactsService.getContacts());
  }

  get contacts() {
    return this.contactsService.getContacts();
  }

  onButtonPressed(action: string): void {    
    if (action === 'cancel') {
      this.contactsService.saveContacts(this.savedContacts);

    } else if (action === 'save') {
      this.contactsService.saveContacts(this.contacts);
      this.saveCopy();    
    }

    this.editMode = false;    
  }
}
