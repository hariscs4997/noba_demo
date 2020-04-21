import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsNobaComponent } from './what-is-noba.component';

describe('WhatIsNobaComponent', () => {
  let component: WhatIsNobaComponent;
  let fixture: ComponentFixture<WhatIsNobaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsNobaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsNobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
