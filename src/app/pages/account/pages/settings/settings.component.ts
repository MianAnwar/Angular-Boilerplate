import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { getItem, StorageItem } from 'src/app/core/utils';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { AccountSetting } from '../../models/account-settings-model';
import { AccountService } from '../../services/account.service';

enum UpgradeToMax {
  disabled = 'DISABLED',
  enabled = 'ENABLED',
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  header = 'Account Limits & Settings';

  hasMaxAccount = false;

  accountDetails?: AccountSetting;

  loading = true;

  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.getSettings();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  getSettings() {
    let sub = this.accountService.getSettings().subscribe({
      next: (res) => {
        this.loading = false;
        this.accountDetails = res.results?.data as Data;
        if (this.accountDetails?.upgradeToMax == UpgradeToMax.disabled) {
          this.hasMaxAccount = false;
        } else if (this.accountDetails?.upgradeToMax == UpgradeToMax.enabled) {
          this.hasMaxAccount = true;
        }
      },
      error: () => {
        this.loading = false;
        // this.toastService.showSeviceError();
      },
    });
    this.subscriptions.push(sub);
  }

  toggleInternationRemittance() {
    let payload = {
      internationalRemittance: !this.accountDetails?.internationalRemittance,
      userId: getItem(StorageItem.UserID),
    };
    let sub = this.accountService.updateInternationRemittance(payload).subscribe({
      next: () => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        // this.toastService.showSeviceError();
      },
    });
    this.subscriptions.push(sub);
  }

  back() {
    this.router.navigate(['/', ROUTER_UTILS.account.root]);
  }

  upgradeAccount() {
    const { root } = ROUTER_UTILS.account.upgradeAccount;
    this.router.navigate(['/', ROUTER_UTILS.account.root, root]);
  }
}
