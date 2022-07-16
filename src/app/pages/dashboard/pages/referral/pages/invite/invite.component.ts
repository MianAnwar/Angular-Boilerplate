import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { ToggleItem } from 'src/app/pages/dashboard/models/toggle-item';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css'],
})
export class InviteComponent {
  constructor(private router: Router) { }

  stateOptions: ToggleItem[] = [
    new ToggleItem('0', undefined, 'Pending'),
    new ToggleItem('1', undefined, 'Accepted'),
  ];

  back() {
    const { root } = ROUTER_UTILS.home.referrals;
    this.router.navigate([root]);
  }

  stateToggleSelectHandler(item: ToggleItem) {
    console.log(item);
  }
}
