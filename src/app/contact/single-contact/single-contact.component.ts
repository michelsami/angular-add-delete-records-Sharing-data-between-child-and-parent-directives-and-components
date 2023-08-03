import { Component, EventEmitter, Input , Output} from '@angular/core';
import { Contact } from 'src/app/shared-module/interface/contact';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.scss']
})
export class SingleContactComponent {

  @Input() contact!: Contact[]; 
  @Output() deleteOneContact = new EventEmitter<Contact>();

  deleteContact(OneContact: Contact) {
   
    if(confirm(`Are you sure you want to delete : ${OneContact.contactName}`))
    this.deleteOneContact.emit(OneContact);
  }
}
