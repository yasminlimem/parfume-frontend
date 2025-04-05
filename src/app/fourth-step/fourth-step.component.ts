import {Component, inject, OnInit} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-fourth-step',
  imports: [
    NgClass
  ],
  templateUrl: './fourth-step.component.html',
  styleUrl: './fourth-step.component.css'
})
export class FourthStepComponent implements OnInit {

  route = inject(ActivatedRoute);
  router = inject(Router);

  selectedGender: string | null = null;

  selectedCharacter: string | null = null;

  selectedBottle: string | null = null;

  selectedFragrance: string | null = null;

  cards: any[] = []

  femaleCards = [
    {
      name: '1',
      src: '/5.png'
    },
    {
      name: '2',
      src: '/3.png'
    },
    {
      name: '3',
      src: '/4.png'
    }
  ]

  maleCards = [
    {
      name: '1',
      src: '/5.png'
    },
    {
      name: '2',
      src: '/3.png'
    },
    {
      name: '3',
      src: '/4.png'
    }
  ]

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap);
    this.selectedGender = this.route.snapshot.queryParamMap.get('gender');
    this.selectedCharacter = this.route.snapshot.queryParamMap.get('character');
    this.selectedFragrance = this.route.snapshot.queryParamMap.get('fragrance');

    this.cards = this.selectedGender === 'male' ? this.maleCards : this.femaleCards;
  }

  selectBottle(bottle: string): void {
    this.selectedBottle = bottle;

    this.router.navigate(
      ['fifthStep'],
      {
        queryParams: {
          gender: this.selectedGender,
          character: this.selectedCharacter,
          fragrance: this.selectedFragrance,
          bottle: bottle
      } }
    ).then(() => console.log('Selected bottle'));
  }
}

