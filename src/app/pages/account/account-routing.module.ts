import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { AccountComponent } from './account.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    data: {
      title: 'Home',
    },
  },
  {
    path: ROUTER_UTILS.account.editProfile.root,
    loadChildren: async () =>
      (await import('../account/pages/edit-profile/edit-profile.module')).EditProfileModule,
  },
  {
    path: ROUTER_UTILS.account.changePin.root,
    loadChildren: async () =>
      (await import('../account/pages/change-pin/change-pin.module')).ChangePinModule,
  },
  {
    path: ROUTER_UTILS.account.support.root,
    loadChildren: async () =>
      (await import('../account/pages/help-support/help-support.module')).HelpSupportModule,
  },
  {
    path: ROUTER_UTILS.account.accountLimitSettings,
    component: SettingsComponent,
  },
  {
    path: ROUTER_UTILS.account.feedback,
    loadChildren: async () =>
      (await import('../account/pages/feedback/feedback.module')).FeedbackModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule { }
