import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { FaqComponent } from './pages/faq/faq.component';
import { HelpSupportComponent } from './pages/help-support/help-support.component';

const routes: Routes = [
  {
    path: '',
    component: HelpSupportComponent,
  },
  {
    path: ROUTER_UTILS.account.support.faq,
    component: FaqComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpSupportRoutingModule {}
