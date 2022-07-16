import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpForm } from './form/sign-up-form';
import { InputTrnComponent } from './pages/input-trn/input-trn.component';
import { InputBasicInfoComponent } from './pages/input-basic-info/input-basic-info.component';
import { PinSettingComponent } from './pages/pin-setting/pin-setting.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [InputTrnComponent, InputBasicInfoComponent, PinSettingComponent, SignUpComponent],
  imports: [CommonModule, SignUpRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [SignUpForm],
})
export class SignUpModule { }
