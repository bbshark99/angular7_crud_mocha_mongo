import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  uri = 'http://localhost:4000/contact';

  constructor(private http: HttpClient) { }

  addContact(person_name, contact_name, contact_gst_number) {
    const obj = {
      person_name: person_name,
      contact_name: contact_name,
      contact_gst_number: contact_gst_number
    };
    console.log(obj);
    return this.http.post(`${this.uri}/add`, obj);
  }
  getContacts() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editContact(id) {
    return this
          .http
          .get(`${this.uri}/edit/${id}`);
  }
  updateContact(person_name, contact_name, contact_gst_number, id) {
    const obj = {
        person_name: person_name,
        contact_name: contact_name,
        contact_gst_number: contact_gst_number
      };
    return this
              .http
              .post(`${this.uri}/update/${id}`, obj);
  }
  deleteContact(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
  viewContact(id) {
    return this
          .http
          .get(`${this.uri}/edit/${id}`);
  }
}