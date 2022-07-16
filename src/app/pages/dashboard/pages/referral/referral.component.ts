import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.css'],
})
export class ReferralComponent {
  constructor(private router: Router) { }

  back() {
    const { root } = ROUTER_UTILS.home;
    this.router.navigate([root]);
  }

  invite() {
    const { root, invite } = ROUTER_UTILS.home.referrals;
    this.router.navigate([root, invite]);
  }
}
