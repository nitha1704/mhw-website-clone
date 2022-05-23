import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestInformationComponent } from './lastest-information.component';

describe('LastestInformationComponent', () => {
  let component: LastestInformationComponent;
  let fixture: ComponentFixture<LastestInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastestInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastestInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
