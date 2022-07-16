import { TransactionHistory } from './../models/transaction-history';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grouped-transactions',
  templateUrl: './grouped-transactions.component.html',
  styleUrls: ['./grouped-transactions.component.css'],
})
export class GroupedTransactionsComponent {
  @Input() transactionsHistory?: TransactionHistory[];
}
