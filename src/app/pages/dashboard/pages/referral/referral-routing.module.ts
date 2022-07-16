import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { InviteComponent } from './pages/invite/invite.component';
import { ReferralComponent } from './referral.component';

const routes: Routes = [
  { path: '', component: ReferralComponent },
  { path: ROUTER_UTILS.home.referrals.invite, component: InviteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferralRoutingModule {}
