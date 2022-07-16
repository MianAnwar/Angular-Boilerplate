import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { InputTrnModel } from '../auth/models/input-trn-model';
import { AccountService } from './services/account.service';
import { DashboardService } from '../dashboard/services/dashboard.service';

@NgModule({
  declarations: [AccountComponent, SettingsComponent],
  imports: [CommonModule, AccountRoutingModule],
  providers: [InputTrnModel, AccountService, DashboardService],
})
export class AccountModule { }
