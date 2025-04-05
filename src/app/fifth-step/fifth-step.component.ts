import {Component, inject, OnInit} from '@angular/core';
import {MatInput} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-fifth-step',
  imports: [
    MatFormFieldModule,
    MatInput,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './fifth-step.component.html',
  styleUrl: './fifth-step.component.css'
})
export class FifthStepComponent implements OnInit {

  nameControl = new FormControl('', [
    Validators.maxLength(25),
  ]);

  route = inject(ActivatedRoute);
  router = inject(Router);

  selectedGender: string | null = null;

  selectedCharacter: string | null = null;

  selectedBottle: string | null = null;

  selectedFragrance: string | null = null;

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap);
    this.selectedGender = this.route.snapshot.queryParamMap.get('gender');
    this.selectedCharacter = this.route.snapshot.queryParamMap.get('character');
    this.selectedFragrance = this.route.snapshot.queryParamMap.get('fragrance');
    this.selectedBottle = this.route.snapshot.queryParamMap.get('bottle');
  }

  checkout(): void {
    this.router.navigate(
      ['checkout'],
      {
        queryParams: {
          gender: this.selectedGender,
          character: this.selectedCharacter,
          fragrance: this.selectedFragrance,
          bottle: this.selectedBottle,
          name: this.nameControl.value,
        } }
    ).then(() => console.log('Checkout Page'));
  }
}
