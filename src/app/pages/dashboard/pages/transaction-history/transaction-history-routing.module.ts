import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionHistoryComponent } from './transaction-history.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionHistoryComponent,
  },
  {
    path: ':id',
    component: TransactionDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionHistoryRoutingModule {}
