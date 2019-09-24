import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {

  contact: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        person_name: ['', Validators.required ],
        contact_name: ['', Validators.required ],
        contact_gst_number: ['', Validators.required ]
      });
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.contactService.editContact(params['id']).subscribe(res => {
          this.contact = res;
      });
    });
  }
  updateContact(person_name, contact_name, contact_gst_number) {
    this.route.params.subscribe(params => {
       this.contactService
        .updateContact(person_name, contact_name, contact_gst_number, params['id'])
        .subscribe(res => {
          this.router.navigate(['/']);
        },
        err => {
          console.log('errDone', err);
        });
       
    });
  }
}