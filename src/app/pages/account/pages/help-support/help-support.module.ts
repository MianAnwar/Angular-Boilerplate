import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpSupportRoutingModule } from './help-support-routing.module';
import { FaqComponent } from './pages/faq/faq.component';
import { HelpSupportComponent } from './pages/help-support/help-support.component';
import { SupportService } from './services/support.service';

@NgModule({
  declarations: [HelpSupportComponent, FaqComponent],
  imports: [CommonModule, HelpSupportRoutingModule],
  providers: [SupportService],
})
export class HelpSupportModule { }
