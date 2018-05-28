import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalNavbarComponent } from './digital-navbar.component';

describe('DigitalNavbarComponent', () => {
  let component: DigitalNavbarComponent;
  let fixture: ComponentFixture<DigitalNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
