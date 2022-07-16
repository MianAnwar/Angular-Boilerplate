import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralRoutingModule } from './referral-routing.module';
import { ReferralComponent } from './referral.component';
import { InviteComponent } from './pages/invite/invite.component';

@NgModule({
  declarations: [ReferralComponent, InviteComponent],
  imports: [CommonModule, ReferralRoutingModule],
})
export class ReferralModule { }
