import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { NotFoundPageComponent } from './not-found.page';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ROUTER_UTILS.errorResponse.notFound,
        component: NotFoundPageComponent,
        data: {
          title: 'The page you were looking for could not be found',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class NotFoundModule { }
