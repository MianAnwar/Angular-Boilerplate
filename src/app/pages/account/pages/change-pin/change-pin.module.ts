import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePinRoutingModule } from './change-pin-routing.module';
import { VerifyPinComponent } from './pages/verify-pin/verify-pin.component';
import { UpdatePinComponent } from './pages/update-pin/update-pin.component';
import { ChangePinForm } from './form/change-pin-form';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VerifyPinComponent, UpdatePinComponent],
  imports: [CommonModule, ChangePinRoutingModule, ReactiveFormsModule],
  providers: [ChangePinForm],
})
export class ChangePinModule { }
