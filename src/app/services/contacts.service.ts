import { Injectable } from '@angular/core';
import { Contacts } from '../classes/contacts.class';

@Injectable()
export class ContactsService {

  private contacts: Contacts;

  constructor () {
    this.contacts = new Contacts(
      'Tatiana Androsova', 
      'androsovatati@mail.ru', 
      'https://gitlab.com/androsovatati/ng-basics/tree/dev'
    );
  }

  public saveContacts(contacts: Contacts) {
    this.contacts.name = contacts.name;
    this.contacts.email = contacts.email;
    this.contacts.link = contacts.link;
  }

  public getContacts(): Contacts {
    return this.contacts;
  }
}
