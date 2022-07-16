import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInForm } from './form/sign-in-form';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule],
  providers: [SignInForm],
})
export class SignInModule { }
