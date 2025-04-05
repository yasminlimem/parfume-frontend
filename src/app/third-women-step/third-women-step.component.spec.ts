import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdWomenStepComponent } from './third-women-step.component';

describe('ThirdWomenStepComponent', () => {
  let component: ThirdWomenStepComponent;
  let fixture: ComponentFixture<ThirdWomenStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdWomenStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdWomenStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
