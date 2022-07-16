import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { UserService } from './services/user-service/user.service';
import { PinSettingModel } from './models/pin-setting-model';
import { BasicInfoModel } from './models/basic-info-model';
import { InputTrnModel } from './models/input-trn-model';
import { AccountSuspendedComponent } from './pages/account-suspended/account-suspended.component';

@NgModule({
  declarations: [AccountSuspendedComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService, InputTrnModel, BasicInfoModel, PinSettingModel],
})
export class AuthModule { }
