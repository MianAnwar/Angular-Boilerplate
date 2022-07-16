import { TransHistoryViewModel } from './models/transaction-history';
import { TransactionHistoryService } from './services/transaction-history.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { DatePipe } from '@angular/common';
import { getItem, StorageItem } from 'src/app/core/utils';
import { Subscription } from 'rxjs';
import { getBalance } from '../home/utils/getBalance';
import { Balance } from '../../models/balance';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css'],
})
export class TransactionHistoryComponent implements OnInit, OnDestroy {
  searchText: string = '';

  listOfCompletedDate?: any[];

  transactionsHistory?: TransHistoryViewModel;

  transactionsHistoryBackUp?: TransHistoryViewModel;

  balance!: Balance;

  dateFiltersList = [
    { title: 'Today' },
    { title: 'This Week' },
    { title: 'This Month' },
    { title: 'All' },
    { title: 'Custom' },
  ];

  transactionTypeFiltersList = [
    { title: 'All' },
    { title: 'Bills' },
    { title: 'Withdraws' },
    { title: 'Canceled' },
    { title: 'Deposits' },
    { title: 'Sent to' },
    { title: 'TopUp' },
  ];

  accountDetails: any;

  subscriptions: Subscription[] = [];

  header = 'Transaction History';

  detailView = false;

  selectedNotification = 0;

  filterDates = false;

  datesfilterGroup = 'This Month';

  datesfilterText = 'This Month';

  TxnTypefilterText = 'All';

  constructor(
    private router: Router,
    public datepipe: DatePipe,
    private transactionHistoryService: TransactionHistoryService,
  ) { }

  ngOnInit(): void {
    this.getSettings();
    this.getBalance();
    this.getTransactionsHistory();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  getBalance() {
    let sub = this.transactionHistoryService
      .getUser(getItem(StorageItem.UserID))
      .subscribe((response) => {
        this.balance = getBalance(response.results?.data?.wallet!);
      });
    this.subscriptions.push(sub);
  }

  getSettings() {
    let sub = this.transactionHistoryService.getSettings(getItem(StorageItem.UserID)).subscribe({
      next: (res) => {
        // this.accountDetails = res.results?.data as AccountSettings;
      },
      error: () => {
        // this.toasterService.showSeviceError();
      },
    });
    this.subscriptions.push(sub);
  }

  setupBody() {
    let date = new Date();
    var firstDayOfCurrentMonth = new Date();
    firstDayOfCurrentMonth.setDate(date.getDate() - 30);

    var firstDayOfCurrentWeek = new Date();
    firstDayOfCurrentWeek.setDate(date.getDate() - 7);

    let body = {
      customerMsisdn: getItem(StorageItem.MSISDN),
      startDate:
        this.datesfilterGroup == 'Custom'
          ? this.datesfilterText.substr(0, 10)
          : this.datesfilterGroup == 'Today'
            ? this.datepipe.transform(new Date(), 'yyyy-MM-dd')
            : this.datesfilterGroup == 'This Week'
              ? this.datepipe.transform(firstDayOfCurrentWeek, 'yyyy-MM-dd')
              : this.datesfilterGroup == 'This Month'
                ? this.datepipe.transform(firstDayOfCurrentMonth, 'yyyy-MM-dd')
                : this.datepipe.transform(firstDayOfCurrentMonth, 'yyyy-MM-dd'),

      endDate:
        this.datesfilterGroup == 'Custom'
          ? this.datesfilterText.substr(13, 20)
          : this.datepipe.transform(new Date(), 'yyyy-MM-dd'),

      transactionType: this.TxnTypefilterText,
      page: '1',
      limit: '10',
    };

    return body;
  }

  getTransactionsHistory() {
    if (this.datesfilterGroup == 'Custom') {
      let today = new Date();

      let extremeStartDate = new Date();
      extremeStartDate.setDate(today.getDate() - 30);

      let selectedStartDate = new Date(this.datesfilterText.substr(0, 10));
      let selectedEndDate = new Date(this.datesfilterText.substr(13, 20));

      if (selectedStartDate < extremeStartDate) {
        // this.toasterService.dangerToast('Invalid Start Date, go maximum 30 days before.');
        return;
      }

      if (selectedEndDate > today) {
        // this.toasterService.dangerToast('Invalid End Date, select maximum today the end-date.');
        return;
      }
    }
    let body = this.setupBody();

    this.transactionsHistory = new TransHistoryViewModel();
    this.transactionsHistoryBackUp = new TransHistoryViewModel();
    let sub = this.transactionHistoryService.getCompleteTransactionsHistory(body).subscribe({
      next: (response: TransHistoryViewModel) => {
        if (response.returned! > 0) {
          this.transactionsHistory = response;
          this.transactionsHistoryBackUp = JSON.parse(JSON.stringify(this.transactionsHistory));
        }
      },
      error: (error) => {
        const messages = error.error.errors[0].message ?? error.message;
        // this.toasterService.dangerToast(messages);
      },
    });
    this.subscriptions.push(sub);
  }

  back() {
    if (this.detailView) {
      this.detailView = false;
    } else {
      const { root } = ROUTER_UTILS.home;
      this.router.navigate(['/', root]);
    }
  }

  clearSearchText() {
    this.searchText = '';
    this.transactionsHistory = JSON.parse(JSON.stringify(this.transactionsHistoryBackUp));
  }

  search(searchText: string) {
    this.transactionsHistory = JSON.parse(JSON.stringify(this.transactionsHistoryBackUp));
    if (searchText) {
      this.transactionsHistory?.transHistory?.forEach((trans, index, groupedHistory) => {
        groupedHistory[index].history = trans.history?.filter((x) =>
          x.InitiatorName?.toLowerCase().includes(this.searchText.toLowerCase()),
        );
      });
    } else {
      this.clearSearchText();
    }
  }

  print() {
    // window.print();
  }

  showFilterByModal() {
    // this.modalService.openSelectModal(
    //   this.transactionTypeFiltersList,
    //   (data: any) => {
    //     this.TxnTypefilterText = data.title;
    //     this.getTransactionsHistory();
    //   },
    //   'Filterd By',
    // );
  }

  showCalenderModal() {
    // this.modalService.openSelectModal(
    //   this.dateFiltersList,
    //   (data: any) => {
    //     this.datesfilterGroup = data.title;
    //     if (this.datesfilterGroup == 'Custom') {
    //       this.openDateRangePicker();
    //     } else {
    //       this.datesfilterText = '';
    //       this.getTransactionsHistory();
    //     }
    //   },
    //   'Select Date',
    // );
  }

  openDateRangePicker() {
    this.filterDates = !this.filterDates;
    // this.modalService.openDateRangePicker((response: string) => {
    //   if (response) {
    //     this.datesfilterText = response;
    //     this.getTransactionsHistory();
    //   }
    // });
  }
}
