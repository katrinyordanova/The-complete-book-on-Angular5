import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { ConsoleSpy } from "../utils";
import { FormBuilderComponent } from "./form-builder.component";

describe('FormBuilderComponent', () => {
  let component: FormBuilderComponent;  ;
  let fixture: ComponentFixture<FormBuilderComponent>;

  let originalConsole, fakeConsole;
  let el, input, form;

  beforeEach(async() => {
    fakeConsole = new ConsoleSpy();
    originalConsole = window.console;
    (<any>window).console = fakeConsole;

    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ FormBuilderComponent ]
    })
    .compileComponents();
  });

  afterAll(() => (<any>window).console = originalConsole);

  it('validates and triggers events', fakeAsync(() => {
    fixture = TestBed.createComponent(FormBuilderComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
    input = fixture.debugElement.query(By.css('input')).nativeElement;
    form = fixture.debugElement.query(By.css('form')).nativeElement;
    fixture.detectChanges;
  }));

  it('displays error with no sku', fakeAsync(() => {
    input.value = '';
    dispatchEvent(input);
    fixture.detectChanges();
    const messages = el.querySelectorAll('.error-message');
    expect(messages[0].innerHTML).toContain('SKU is invalid');
    expect(messages[1].innerHTML).toContain('SKU is required');
  }));

  it('displays no errors when sku has a value', fakeAsync(() => {
    input.value = 'XXZ';
    dispatchEvent(input);
    fixture.detectChanges();
    const messages = el.querySelectorAll('error-message');
    expect(messages.length).toEqual(0);
  }));

  it('handles SKU changes', fakeAsync(() => {
    input.value = 'XXZ';
    dispatchEvent(input);
    tick();
    expect(fakeConsole.logs).toContain('sku changed to XXZ');
  }));

  it('handles form changes', fakeAsync(() => {
    input.value = 'ABC';
    dispatchEvent(input);
    tick();
    fixture.detectChanges();
    dispatchEvent(form);
    tick();
    expect(fakeConsole.logs).toContain('you submitted: ABC');
  }));
});