import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WidgetComponent } from './pages/home/components/widget/widget.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderCardComponent } from './pages/home/components/header-card/header-card.component';
import { HomeComponent } from './pages/home/home.component';
import { TrendingSearchComponent } from './pages/home/components/trending-search/trending-search.component';
import { DashboardService } from './services/dashboard.service';

@NgModule({
  declarations: [
    HomeComponent,
    WidgetComponent,
    CategoriesComponent,
    HeaderCardComponent,
    TrendingSearchComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
  providers: [DashboardService],
})
export class DashboardModule { }
