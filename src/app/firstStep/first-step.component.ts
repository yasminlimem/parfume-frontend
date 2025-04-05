import {Component, inject} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-first-step',
  imports: [
    NgClass
  ],
  templateUrl: './first-step.component.html',
  styleUrl: './first-step.component.css'
})
export class FirstStepComponent {
  selectedGender: string | null = null;
  router = inject(Router);

  selectGender(gender: string): void {
    this.selectedGender = gender;

    this.router
      .navigate(['secondStep'], { queryParams: { gender: gender } })
      .then(() => console.log('Selected gender'));
  }
}
