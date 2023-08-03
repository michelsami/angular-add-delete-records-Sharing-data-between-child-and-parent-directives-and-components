import { Component } from '@angular/core';
import { Contact } from 'src/app/shared-module/interface/contact';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.scss']
})
export class AllContactsComponent {

  allContacts : Contact[];

  constructor(){
    this.allContacts =[
      {contactName: 'John', contactNumber :"012 455 66 226"},
      {contactName: 'Albert', contactNumber :'012 455 66 224'},
      {contactName: 'Sarah', contactNumber :'012 455 66 225'},
      {contactName: 'Alex', contactNumber :'012 455 66 227'},
      {contactName: 'Jina', contactNumber :'012 455 66 228'},
      {contactName: 'Janette', contactNumber :'012 455 66 229'},
      {contactName: 'Geo', contactNumber :'012 455 66 220'}
    ]
  }

  deleteContact(contactDetails: Contact){
     const index = this.allContacts.indexOf(contactDetails);
    if (index > -1) {
      this.allContacts.splice(index, 1); // Remove the contact from the 'contact' array
    }
    console.log(index)
  }

  findContact(searchInput: any){
   let contactFound = this.allContacts.find(contact => contact.contactName == searchInput.value)
   if(contactFound){
    this.allContacts.length = 0;
    this.allContacts.push(contactFound) ;
   }
  }

}
