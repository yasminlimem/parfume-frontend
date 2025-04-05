import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParfumesComponent } from './parfumes.component';

describe('ParfumesComponent', () => {
  let component: ParfumesComponent;
  let fixture: ComponentFixture<ParfumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParfumesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParfumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
