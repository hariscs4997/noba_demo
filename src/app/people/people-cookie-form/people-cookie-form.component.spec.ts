import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCookieFormComponent } from './people-cookie-form.component';

describe('PeopleCookieFormComponent', () => {
  let component: PeopleCookieFormComponent;
  let fixture: ComponentFixture<PeopleCookieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleCookieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleCookieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
