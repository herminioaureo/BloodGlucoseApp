import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddglucoseComponent } from './addglucose.component';

describe('AddglucoseComponent', () => {
  let component: AddglucoseComponent;
  let fixture: ComponentFixture<AddglucoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddglucoseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddglucoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
