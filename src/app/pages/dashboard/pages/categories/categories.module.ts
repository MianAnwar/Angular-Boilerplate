import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { DashboardService } from '../../services/dashboard.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, CategoriesRoutingModule],
  providers: [DashboardService],
})
export class CategoriesModule { }
