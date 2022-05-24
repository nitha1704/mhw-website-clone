import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhwMediaComponent } from './mhw-media.component';

describe('MhwMediaComponent', () => {
  let component: MhwMediaComponent;
  let fixture: ComponentFixture<MhwMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhwMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MhwMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
