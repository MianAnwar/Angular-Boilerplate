import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from '../../core/utils/router.utils';
import { AccountSuspendedComponent } from './pages/account-suspended/account-suspended.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      (await import('../auth/pages/sign-in/sign-in.module')).SignInModule,
  },
  {
    path: ROUTER_UTILS.auth.signIn,
    loadChildren: async () => (await import('../auth/pages/sign-in/sign-in.module')).SignInModule,
  },
  {
    path: ROUTER_UTILS.auth.signUp,
    loadChildren: async () => (await import('../auth/pages/sign-up/sign-up.module')).SignUpModule,
  },
  {
    path: ROUTER_UTILS.auth.suspended,
    component: AccountSuspendedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule { }
