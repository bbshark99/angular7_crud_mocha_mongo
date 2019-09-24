import { Component, OnInit } from '@angular/core';
import Contact from '../Contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  contacts: Contact[];
  isFound: Boolean;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    console.log("ngOnint");
    this.contactService
      .getContacts()
      .subscribe((data: Contact[]) => {
        this.contacts = data;
        if(data.length > 0)
          this.isFound = true;
    });
  }
  
  deleteContact(id) {
    this.contactService
      .deleteContact(id)
      .subscribe((res:Contact[]) => {
        this.contacts = res;
        if(res.length > 0)
          this.isFound = true;
        else this.isFound = false;
    });
  }
}