import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { defaultCurrency } from 'src/app/core/utils/currencyFormat';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { AuthService } from 'src/app/pages/auth/services/auth/auth.service';
import { Balance } from 'src/app/pages/dashboard/models/balance';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.css'],
})
export class HeaderCardComponent {
  @Input() balance!: Balance;

  showBalance = false;

  defaultCurrency = defaultCurrency;

  constructor(private authService: AuthService, private router: Router) { }

  toggleEye() {
    this.showBalance = !this.showBalance;
  }

  navigateToCashIn() {
    const { root } = ROUTER_UTILS.home.cashIn;
    this.router.navigate(['/', root]);
  }
}
