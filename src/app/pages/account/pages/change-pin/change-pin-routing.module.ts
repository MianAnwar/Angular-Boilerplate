import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { UpdatePinComponent } from './pages/update-pin/update-pin.component';
import { VerifyPinComponent } from './pages/verify-pin/verify-pin.component';

const routes: Routes = [
  {
    path: '',
    component: VerifyPinComponent,
  },
  {
    path: ROUTER_UTILS.account.changePin.update,
    component: UpdatePinComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePinRoutingModule {}
