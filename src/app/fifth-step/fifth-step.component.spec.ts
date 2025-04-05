import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthStepComponent } from './fifth-step.component';

describe('FifthStepComponent', () => {
  let component: FifthStepComponent;
  let fixture: ComponentFixture<FifthStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FifthStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
