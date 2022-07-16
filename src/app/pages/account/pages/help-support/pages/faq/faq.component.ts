import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { Faq, Iterator } from 'src/app/pages/account/models/faq-model';
import { SupportService } from '../../services/support.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit, OnDestroy {
  header = 'FAQ';

  loading = true;

  faq: Faq[] = [];

  faqType?: string[];

  faqIterator: Iterator[] = [];

  searchView = false;

  subscriptions: Subscription[] = [];

  constructor(private router: Router, private supportService: SupportService) { }

  ngOnInit(): void {
    this.setUpFaq();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  setUpFaq() {
    let sub = this.supportService.getFaq().subscribe((res) => {
      this.faqIterator = res.results?.dataItems as Iterator[];
      this.loading = false;
    });
    this.subscriptions.push(sub);
  }

  back() {
    const { root, support } = ROUTER_UTILS.account;
    this.router.navigate(['/', root, support.root]);
  }

  // Bind with app nav
  search() {
    this.searchView = true;
  }

  hideSearch() {
    this.searchView = false;
  }
}
