import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { ContactService } from './../contact.service';
import { By } from '@angular/platform-browser';
import { GstEditComponent } from './gst-edit.component';

describe('GstEditComponent', () => {
    beforeEach( async() => {
        TestBed.configureTestingModule({
            declarations: [
                GstEditComponent
            ],
            imports: [
                RouterTestingModule.withRoutes([]),
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule
            ]
        });
    });
    describe(':', () => {
        function setup() {
            const fixture = TestBed.createComponent(GstEditComponent);
            const comp = fixture.debugElement.componentInstance;
            const contactService = fixture.debugElement.injector.get(ContactService);
            const de = fixture.debugElement.query(By.css('form'));
            const el = de.nativeElement;
            return { fixture, comp, contactService, de, el };
        }

        it('should create the get contact component', () => {
            const { comp } = setup();
            expect(comp).toBeTruthy();
        });
    })
    
})