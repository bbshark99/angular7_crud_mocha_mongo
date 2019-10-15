import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GstGetComponent } from './gst-get.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ContactService } from './../contact.service';

describe('GstGetComponent', async () => {
    beforeEach(async (() => {
        TestBed.configureTestingModule({
            imports:[ RouterTestingModule.withRoutes([]), HttpClientModule ],
            declarations: [ GstGetComponent ],
          });
    }));

    describe(':', () => {
        function setup() {
            const fixture = TestBed.createComponent(GstGetComponent);
            const app = fixture.debugElement.componentInstance;
            const contactService = fixture.debugElement.injector.get(ContactService);
            return { fixture, app, contactService };
        }

        it('should create app component', () => {
            const { app } = setup();
            expect(app).toBeTruthy();
        });

        it('should receive results from database', () => {
            const { fixture, app, contactService } = setup();
            const mockUsers = [
                { person_name: "test", contact_name: "test@test.com", contact_gst_number: "7914329" },
                { person_name: "bug", contact_name: "bug@bug.com", contact_gst_number: "7914338" }
            ];

            contactService.getContacts()
                .subscribe((data) => {
                    if (data != null) app.contacts = data
                    else console.log('NO');
                }, () => {
                    console.log('ERROR');
                })
        })
    });
})