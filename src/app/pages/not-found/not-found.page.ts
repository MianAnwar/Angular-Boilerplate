import { Component } from '@angular/core';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';

@Component({
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.css'],
})
export class NotFoundPageComponent {
  path = ROUTER_UTILS.base;
}
