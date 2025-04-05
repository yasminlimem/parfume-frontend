import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-checkout',
  imports: [
    ReactiveFormsModule,
    MatDivider
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  sizeControl = new FormControl(50, [])
  route = inject(ActivatedRoute);
  router = inject(Router);

  selectedGender: string | null = null;

  selectedCharacter: string | null = null;

  selectedBottle: string | null = null;

  selectedFragrance: string | null = null;

  name: string | null = null;

  unitPrice = 15;
  price = 1239;

  bottleSizes = [
    { label: '50ML', value: 50, price: 3000 },
    { label: '100ML', value: 100, price: 5000 },
    { label: '150ML', value: 150, price: 7000 }
  ];


  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap);
    this.selectedGender = this.route.snapshot.queryParamMap.get('gender');
    this.selectedCharacter = this.route.snapshot.queryParamMap.get('character');
    this.selectedFragrance = this.route.snapshot.queryParamMap.get('fragrance');
    this.selectedBottle = this.route.snapshot.queryParamMap.get('bottle');
    this.name = this.route.snapshot.queryParamMap.get('name');

    this.sizeControl.valueChanges.subscribe(change => {
      this.calculatePrice();
    })
  }


  buyNow() {

  }

  calculatePrice() {
    const size = this.sizeControl.value;
    if (size) {
      this.price = this.unitPrice * size;
    }
  }
}
