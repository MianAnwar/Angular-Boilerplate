import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { constructURL, ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { ButtonStackItem } from 'src/app/pages/dashboard/models/button-stack-item';

@Component({
  selector: 'app-help-support',
  templateUrl: './help-support.component.html',
  styleUrls: ['./help-support.component.css'],
})
export class HelpSupportComponent {
  header = 'Help & Support';

  constructor(private router: Router) { }

  supportBtns: ButtonStackItem[] = [
    new ButtonStackItem(
      'assets/images/question-icon.svg',
      'Frequently Asked Questions (FAQs)',
      undefined,
      constructURL([
        ROUTER_UTILS.account.root,
        ROUTER_UTILS.account.support.root,
        ROUTER_UTILS.account.support.faq,
      ]),
    ),
    new ButtonStackItem(
      'assets/images/chat-multi-icon.svg',
      'Chat with a Support Agent',
      undefined,
    ),
    new ButtonStackItem('assets/images/chat-plus-icon.svg', 'Submit a Complaint', undefined),
    new ButtonStackItem(
      'assets/images/chat-minus-icon.svg',
      'View Submitted Complaints',
      undefined,
    ),
  ];

  contactUsBtns: ButtonStackItem[] = [
    new ButtonStackItem('assets/images/phone-icon.svg', '888-724-4267', undefined),
    new ButtonStackItem('assets/images/web-world-icon.svg', 'www.mycash.com', undefined),
    new ButtonStackItem('assets/images/map-pin-icon.svg', 'MyCash Retailer Locations', undefined),
  ];

  legalBtns: ButtonStackItem[] = [
    new ButtonStackItem(
      'assets/images/pay-bills-icon.svg',
      'Privacy Policy',
      undefined,
      ROUTER_UTILS.legal.privacyPolicy,
    ),
    new ButtonStackItem(
      'assets/images/pay-bills-icon.svg',
      'Terms & Conditions',
      undefined,
      ROUTER_UTILS.legal.termsCondition,
    ),
  ];

  back() {
    this.router.navigate(['/', ROUTER_UTILS.account.root]);
  }
}
