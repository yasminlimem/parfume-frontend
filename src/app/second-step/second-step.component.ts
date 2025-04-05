import {Component, inject, OnInit} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSlideToggle, MatSlideToggleChange} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-second-step',
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './second-step.component.html',
  styleUrl: './second-step.component.css'
})
export class SecondStepComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);

  selectedGender: string | null = null;

  selectedCharacter: string | null = null;

  cards: any[] = []
  femaleCards = [
    {
      name: 'Glamorous',
      src: '/glam.jpg'
    },
    {
      name: 'Sensual',
      src: '/sensual.jpg'
    },
    {
      name: 'Natural',
      src: '/natural.jpg'
    },
    {
      name: 'Feminine',
      src: '/fem.jpg'
    },
    {
      name: 'Casual',
      src: '/casual.webp'
    },
  ]

  maleCards = [
    {
      name: 'Dynamic',
      src: '/Dynamic.jpg'
    },
    {
      name: 'Charismatic',
      src: '/Charismatic.jpg'
    },
    {
      name: 'Masculine',
      src: '/Masculine.jpg'
    },
    {
      name: 'Extravagant',
      src: '/Extravagant.jpg'
    },
    {
      name: 'Casual',
      src: '/Casual.jpg'
    },
  ]

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap);
    this.selectedGender = this.route.snapshot.queryParamMap.get('gender');

    this.cards = this.selectedGender === 'male' ? this.maleCards : this.femaleCards;
  }

  selectCharacter(character: string): void {
    this.selectedCharacter = character;

    this.router.navigate(
      ['thirdStep'],
      { queryParams: { gender: this.selectedGender, character: character } }
    ).then(() => console.log('Selected character'));
  }
}
