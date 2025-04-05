import { Routes } from '@angular/router';
import {TitleComponent} from './title/title.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {FirstStepComponent} from './firstStep/first-step.component';
import {SecondStepComponent} from './second-step/second-step.component';
import {ThirdWomenStepComponent} from './third-women-step/third-women-step.component';
import {FourthStepComponent} from './fourth-step/fourth-step.component';
import {FifthStepComponent} from './fifth-step/fifth-step.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: 'title',
    component: TitleComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'signUp',
    component: SignUpComponent,
  },
  {
    title: 'Create Your Perfume',
    path:'firstStep',
    component: FirstStepComponent,
  },
  {
    path:'secondStep',
    component: SecondStepComponent,
  },
  {
    path:'thirdStep',
    component: ThirdWomenStepComponent,
  },
  {
    path:'fourthStep',
    component: FourthStepComponent,
  },
  {
    path:'fifthStep',
    component: FifthStepComponent,
  },
  {
    path:'checkout',
    component: CheckoutComponent,
  },
  {
    path:'home',
    component:HomeComponent
  }
];
