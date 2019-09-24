import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-gst-view',
  templateUrl: './gst-view.component.html',
  styleUrls: ['./gst-view.component.css']
})
export class GstViewComponent implements OnInit {

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

  updateContact () {
    this.route.params.subscribe(params => {
      this.router.navigate(['/edit/' + params['id']]);
    });
  }

  deleteContact () {
    this.route.params.subscribe(params => {
      this.contactService
        .deleteContact(params['id'])
        .subscribe(res => {
          console.log('Deleted', res);
          this.router.navigate(['/'])
        });
    });
  }
}