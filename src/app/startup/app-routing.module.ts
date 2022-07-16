import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { NoAuthGuard } from '../core/guards/no-auth.guard';
import { ROUTER_UTILS } from '../core/utils/router.utils';
import { NotFoundPageComponent } from '../pages/not-found/not-found.page';
import { dashboardRoutes } from '../routes/dashboard';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: ROUTER_UTILS.auth.root,
    pathMatch: 'full',
  },

  // component: LayoutComponent,
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: ROUTER_UTILS.home.root,
        loadChildren: async () =>
          (await import('../pages/dashboard/dashboard.module')).DashboardModule,
        canLoad: [AuthGuard],
      },
    ],
  },

  // component: HeadlessLayoutComponent,
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: ROUTER_UTILS.account.root,
        loadChildren: async () => (await import('../pages/account/account.module')).AccountModule,

        canLoad: [AuthGuard],
      },
      ...dashboardRoutes,
    ],
  },

  // component: TermsConditionComponent,
  {
    path: ROUTER_UTILS.legal.termsCondition,
    component: AppComponent,
  },

  // component: PrivacyComponent,
  {
    path: ROUTER_UTILS.legal.privacyPolicy,
    component: AppComponent,
  },

  // component: SuccessFailureResponsePageComponent,
  {
    path: 'success',
    component: AppComponent,
  },

  {
    path: ROUTER_UTILS.auth.root,
    loadChildren: async () => (await import('../pages/auth/auth.module')).AuthModule,
    canLoad: [NoAuthGuard],
  },

  {
    path: '**',
    loadChildren: async () =>
      (await import('../pages/not-found/not-found.module')).NotFoundModule,
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
