import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-account-suspended',
  templateUrl: './account-suspended.component.html',
  styleUrls: ['./account-suspended.component.css'],
})
export class AccountSuspendedComponent {
  phone?: string;

  constructor(private router: Router, public uObj: UserService) {
    this.phone = this.uObj.phone;
  }

  back() {
    this.router.navigate([ROUTER_UTILS.auth.root]);
  }
}
