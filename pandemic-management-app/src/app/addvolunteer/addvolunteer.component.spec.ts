import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvolunteerComponent } from './addvolunteer.component';

describe('AddvolunteerComponent', () => {
  let component: AddvolunteerComponent;
  let fixture: ComponentFixture<AddvolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvolunteerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
