import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TransactionHistoryRoutingModule } from './transaction-history-routing.module';
import { TransactionHistoryComponent } from './transaction-history.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { GroupedTransactionsComponent } from './grouped-transactions/grouped-transactions.component';

@NgModule({
  declarations: [
    TransactionHistoryComponent,
    TransactionDetailComponent,
    GroupedTransactionsComponent,
  ],
  imports: [FormsModule, CommonModule, TransactionHistoryRoutingModule],
  providers: [DatePipe],
})
export class TransactionHistoryModule { }
