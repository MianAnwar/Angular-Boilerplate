import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FeedbackForm } from './form/feedback-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FeedbackComponent],
  imports: [CommonModule, FeedbackRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [FeedbackForm],
})
export class FeedbackModule { }
