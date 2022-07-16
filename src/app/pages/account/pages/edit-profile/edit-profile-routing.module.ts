import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { UpdateAddressComponent } from './pages/update-address/update-address.component';
import { UpdateEmailComponent } from './pages/update-email/update-email.component';
import { UpdateSourceOfIncomeComponent } from './pages/update-source-of-income/update-source-of-income.component';

const routes: Routes = [
  {
    path: '',
    component: EditProfileComponent,
  },
  {
    path: ROUTER_UTILS.account.editProfile.updateAddress,
    component: UpdateAddressComponent,
  },
  {
    path: ROUTER_UTILS.account.editProfile.updateEmail,
    component: UpdateEmailComponent,
  },
  {
    path: ROUTER_UTILS.account.editProfile.updateSourceOfIncome,
    component: UpdateSourceOfIncomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfileRoutingModule { }
