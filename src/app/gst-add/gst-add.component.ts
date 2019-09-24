import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder, 
      private contactService: ContactService
    ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required ],
      contact_name: ['', Validators.required ],
      contact_gst_number: ['', Validators.required ]
    });
  }

  addContact(person_name, contact_name, contact_gst_number) {
    this.contactService
      .addContact(person_name, contact_name, contact_gst_number)      
      .subscribe(res => {
        this.router.navigate(['/']);
      },
      err => {
        console.log('errDone', err);
      });
  }

  ngOnInit() {
  }

}