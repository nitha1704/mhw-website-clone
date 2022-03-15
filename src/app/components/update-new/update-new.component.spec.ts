import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewComponent } from './update-new.component';

describe('UpdateNewComponent', () => {
  let component: UpdateNewComponent;
  let fixture: ComponentFixture<UpdateNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
