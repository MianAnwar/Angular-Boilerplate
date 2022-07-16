import { ProfileForm } from './form/profile-form';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { UpdateEmailComponent } from './pages/update-email/update-email.component';
import { UpdateAddressComponent } from './pages/update-address/update-address.component';
import { UpdateSourceOfIncomeComponent } from './pages/update-source-of-income/update-source-of-income.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileService } from './services/edit-profile.service';

@NgModule({
  declarations: [
    EditProfileComponent,
    UpdateEmailComponent,
    UpdateAddressComponent,
    UpdateSourceOfIncomeComponent,
  ],
  imports: [CommonModule, EditProfileRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ProfileForm, EditProfileService],
})
export class EditProfileModule { }
