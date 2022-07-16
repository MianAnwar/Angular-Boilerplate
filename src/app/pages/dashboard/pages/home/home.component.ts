import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DashboardCard, DashboardData } from '../../models/widget';
import { DashboardService } from '../../services/dashboard.service';
import { HOME } from 'src/app/core/utils/page-keys';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { Card } from '../../models/card';
import { Balance } from '../../models/balance';
import { getBalance } from './utils/getBalance';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import {
  billingList,
  DashboardTemplate,
  inviteList,
  paymentlist,
  shortcuts,
  templateMapping,
  topPicks,
} from './utils/templateMapping';
import { cardMapper } from './utils/cardMapper';
import { YYYY__MM__DD } from 'src/app/core/utils/dateFormats';
import { UserService } from 'src/app/pages/auth/services/user-service/user.service';
import { environment } from 'src/environments/environment';
import { defaultCurrency } from 'src/app/core/utils/currencyFormat';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  private subscriptions: Subscription[] = [];

  @ViewChild('Wallet', { static: false }) wallet!: TemplateRef<Element>;

  @ViewChild('Banners', { static: false }) banners!: TemplateRef<Element>;

  @ViewChild('Shortcuts', { static: false }) shortcuts!: TemplateRef<Element>;

  @ViewChild('BillingList', { static: false })
  billingList!: TemplateRef<Element>;

  @ViewChild('TopPicks', { static: false }) topPicks!: TemplateRef<Element>;

  @ViewChild('PaymentList', { static: false })
  paymentList!: TemplateRef<Element>;

  @ViewChild('InviteList', { static: false }) inviteList!: TemplateRef<Element>;

  HOME = HOME;


  shortcutsGroup: Card[] = [];

  topPickGroup: Card[] = [];

  isSearchpage: boolean = false;

  user!: User | undefined;

  balance!: Balance;

  allBills?: DashboardCard;

  scheduledPayments?: DashboardCard;

  inviteUsers?: DashboardCard;

  billPaymentPath = ['/', ROUTER_UTILS.home.billPayment.root];

  InviteFriendPath = ['/', ROUTER_UTILS.home.referrals.root];

  userId: string = '';

  showTopPicks: boolean = false;

  dashboardData: DashboardData | undefined = undefined;

  templateMapping: DashboardTemplate | undefined = undefined;

  YYYY__MM__DD = YYYY__MM__DD;

  loader = {
    widgets: false,
  };

  defaultCurrency = defaultCurrency;

  hideSymbol = true;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router,
    private uObj: UserService,
  ) {
    this.dashboardService.getUser(this.userId).subscribe((response) => {
      debugger;
      this.user = response.results?.data;
      this.uObj.data = response.results?.data;
      this.balance = getBalance(this.user?.wallet!);
    });
  }

  ngAfterViewInit(): void {
    this.templateMapping = this.getTemplatesMappings();
  }

  getTemplatesMappings(): DashboardTemplate {
    return new DashboardTemplate(
      this.wallet,
      this.banners,
      this.billingList,
      this.shortcuts,
      this.topPicks,
      this.paymentList,
      this.inviteList,
    );
  }

  ngOnInit(): void {
    this.isSearchpage = this.router.url === '/dashboard/search';
    this.getWidgets();
    this.rateUsTimer();
  }

  rateUsTimer() {
    var self = this;

  }

  getWidgetByType(dashboardItems: DashboardCard[], type: string) {
    return dashboardItems.find((x) => x.type === templateMapping[type]) || undefined;
  }

  getWidgets() {
    this.loader.widgets = true;
    const subscribe = this.dashboardService.getWidgets(this.userId).subscribe({
      next: (response) => {
        const responseData = response;
        const shortcutResponse = this.getWidgetByType(responseData!.dashboardItems, shortcuts);
        const topPickGroup = this.getWidgetByType(responseData!.dashboardItems, topPicks);
        this.shortcutsGroup = (shortcutResponse && cardMapper(shortcutResponse)) || [];
        this.topPickGroup = (topPickGroup && cardMapper(topPickGroup)) || [];
        this.showTopPicks = this.topPickGroup[0]?.widgets?.length > 0;

        this.getScheduledPayments(responseData?.dashboardItems!);
        this.getBillpayments(responseData?.dashboardItems!);
        this.getInvitees(responseData?.dashboardItems!);
        this.dashboardData = responseData;
        this.loader.widgets = false;
      },
      error: () => {
        this.loader.widgets = false;
      },
    });
    this.subscriptions.push(subscribe);
  }

  getBillpayments(dashboardItems: DashboardCard[]) {
    const allBills = this.getWidgetByType(dashboardItems, billingList);
    this.allBills = allBills;
  }

  getInvitees(dashboardItems: DashboardCard[]) {
    const invitees = this.getWidgetByType(dashboardItems, inviteList);
    this.inviteUsers = invitees;
  }

  getScheduledPayments(dashboardItems: DashboardCard[]) {
    const scheduledPayments = this.getWidgetByType(dashboardItems, paymentlist);
    this.scheduledPayments = scheduledPayments;
  }

  ngOnDestroy() {
    for (const subscriber of this.subscriptions) {
      subscriber.unsubscribe();
    }
  }
}
