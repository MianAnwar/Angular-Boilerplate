import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { getItem, StorageItem } from 'src/app/core/utils';
import { constructURL, ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { AuthService } from '../auth/services/auth/auth.service';
import { ButtonStackItem } from '../dashboard/models/button-stack-item';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  HeaderText = '';

  userData?: User;

  accountBtns: ButtonStackItem[] = [
    new ButtonStackItem('assets/images/Redeem-Voucher-iocn.svg', 'Redeem Voucher'),
    new ButtonStackItem(
      'assets/images/Account-Limits-icon.svg',
      'Account Limits & Settings',
      undefined,
      constructURL([ROUTER_UTILS.account.root, ROUTER_UTILS.account.accountLimitSettings]),
    ),
    new ButtonStackItem(
      'assets/images/Transaction-History-icon.svg',

      'Transaction History',
      undefined,
      constructURL([ROUTER_UTILS.home.transactionHistory.root]),
    ),
    new ButtonStackItem('assets/images/backLink-icon.svg', 'Linked Bank Accounts & cards'),
    new ButtonStackItem('assets/images/Recurring-Payments-icon.svg', 'Recurring Payments'),
    new ButtonStackItem('assets/images/prepaid-card-icon.svg', 'MyCash Prepaid Mastercard'),
    new ButtonStackItem('assets/images/Invite-Earn-icon.svg', 'Invite & Earn'),
    new ButtonStackItem('assets/images/Merchant-icon.svg', 'Become a MyCash Merchant'),
  ];

  securityBtns: ButtonStackItem[] = [
    new ButtonStackItem(
      'assets/images/lock-icon.svg',
      'Change PIN',
      undefined,
      constructURL([ROUTER_UTILS.account.root, ROUTER_UTILS.account.changePin.root]),
    ),
  ];

  supportBtns: ButtonStackItem[] = [
    new ButtonStackItem(
      'assets/images/question-icon.svg',
      'Help & Support',
      undefined,
      'account/support',
    ),
    new ButtonStackItem(
      'assets/images/chat-icon.svg',
      'App Feedback',
      undefined,
      'account/feedback',
    ),
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  goToRequestModule() {
    const { root, cashInRequest } = ROUTER_UTILS.home.cashIn;
    this.router.navigate(['/', root, cashInRequest]);
  }

  goToAgentModule() {
    const { root, cashInAgent } = ROUTER_UTILS.home.cashIn;
    this.router.navigate(['/', root, cashInAgent]);
  }

  back() {
    this.router.navigate(['/', ROUTER_UTILS.home.root]);
  }

  logout() {
    this.authService.signOut();
    this.router.navigate(['/', ROUTER_UTILS.auth.root]);
  }

  upgradeAccount() {
    const { root } = ROUTER_UTILS.account.upgradeAccount;
    this.router.navigate(['/', ROUTER_UTILS.account.root, root]);
  }

  editProfile() {
    const { root } = ROUTER_UTILS.account.editProfile;
    this.router.navigate(['/', ROUTER_UTILS.account.root, root]);
  }
}
