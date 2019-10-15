import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GstAddComponent } from './gst-add.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ContactService } from './../contact.service';
import { By } from '@angular/platform-browser';

describe('GstAddComponent', () => {
    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [
                GstAddComponent
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
            const fixture = TestBed.createComponent(GstAddComponent);
            const comp = fixture.debugElement.componentInstance;
            const contactService = fixture.debugElement.injector.get(ContactService);
            const de = fixture.debugElement.query(By.css('form'));
            const el = de.nativeElement;
            return { fixture, comp, contactService, de, el };
        }

        it('should create the add contact component', () => {
            const { comp } = setup();
            expect(comp).toBeTruthy();
        });

        it('should call submitted to true', async(() => {
            var { fixture, comp, de, el } = setup();
            fixture.detectChanges();
            spyOn(comp, 'addContact').and.returnValues("test", "test@test.com", "123123");
            el = fixture.debugElement.query(By.css('button')).nativeElement;
            el.click();
            expect(comp.addContact).toHaveBeenCalledTimes(0);
        }));

        it('form should be invalid', async(() => {
            const { comp } = setup();
            comp.angForm.controls['person_name'].setValue('');
            comp.angForm.controls['contact_name'].setValue('');
            comp.angForm.controls['contact_gst_number'].setValue('');
            expect(comp.angForm.valid).toBeFalsy();
        }));

        it('form should be valid', async(() => {
            const { comp } = setup();
            comp.angForm.controls['person_name'].setValue('test');
            comp.angForm.controls['contact_name'].setValue('test@test.com');
            comp.angForm.controls['contact_gst_number'].setValue('123123');
            expect(comp.angForm.valid).toBeTruthy();
        }));

    })
    
})