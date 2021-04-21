import { async, ComponentFixture, inject, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent]
    });
  });

  beforeEach(async(
    inject([HttpTestingController], _httpMock => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      httpMock = _httpMock;
    }))
  )

  afterEach(
    inject([HttpTestingController], (httpMock: HttpTestingController) => {
      httpMock.verify();
    })
  );

  it('should send a POST request', async(() => {
    component.makePost();
    const req = httpMock.expectOne(
      'http://jsonplaceholder.typicode.com/posts'
    );
    expect(req.request.method).toEqual('POST');
    req.flush({ response: 'OK' });
    expect(component.data).toEqual({ response: 'OK' });
    httpMock.verify();
  }));

  it('should send a DELETE request', async(() => {
    component.makeDelete();
    const req = httpMock.expectOne(
      'http://jsonplaceholder.typicode.com/posts/1'
    );
    expect(req.request.method).toEqual('DELETE');
    req.flush({ response: 'OK' });
    expect(component.data).toEqual({ response: 'OK' });
    httpMock.verify();
  }));

  it('should send correct headers', async(() => {
    component.makeHeaders();
    const req = httpMock.expectOne(req =>
      req.headers.has('X-API-TOKEN') &&
      req.headers.get('X-API-TOKEN') === 'ng-book'
    );
    req.flush({ response: 'OK' });
    expect(component.data).toEqual({ response: 'OK' });
    httpMock.verify();
  }));
});