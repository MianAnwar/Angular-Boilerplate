import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostShortcut, Widget } from '../../models/widget';
import { Location } from '@angular/common';
import { CATEGORIES, CATEGORIES_EDIT } from 'src/app/core/utils/page-keys';
import { Card } from '../../models/card';
import { Subscription } from 'rxjs';
import { shortcuts, templateMapping } from '../home/utils/templateMapping';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { parseErrorMessage } from 'src/app/core/utils/parseErrorMessage';
import { DashboardService } from '../../services/dashboard.service';

// TODO // this component needs refactoring
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  CATEGORIES = CATEGORIES;

  CATEGORIES_EDIT = CATEGORIES_EDIT;

  shortcutWidgets: Card[] = [];

  allWidgets: Card[] = [];

  isEditMode = false;

  Header = 'Edit Shortcuts';

  totalShortcutsAllowed = 8;

  subscription?: Subscription;

  userId: string = '';

  loader = {
    widgets: false,
  };

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id'] === 'edit') {
        this.isEditMode = true;
      }
      this.getWidgets();
    });
  }

  getWidgets() {
    this.loader.widgets = true;
    this.subscription = this.dashboardService.getGeneralCards(this.userId).subscribe({
      next: (response) => {
        const resp: Card = response?.filter((x) => x.type === templateMapping[shortcuts])[0]!;

        let shortcutCardsIds: string[] = [];
        let shortcutGroup: Card[] = [];

        if (resp) {
          resp.widgets = resp?.dataItems || [];
          shortcutCardsIds = resp.widgets?.map((x) => x.categoryEnum);

          resp.widgets =
            (this.isEditMode && this.adjustShortcutWidgets(resp.widgets)) || resp.widgets;

          shortcutGroup.push(resp);
        }

        const groupedCards: Card[] =
          response?.filter((x) => x.type !== templateMapping[shortcuts]) || [];

        for (const card of groupedCards) {
          card.widgets = card.dataItems;
          const items: Widget[] = card.widgets;
          for (const item of items) {
            item.isEditMode = this.isEditMode;
            item.hideWidget = shortcutCardsIds.includes(item.categoryEnum);
          }
        }

        this.shortcutWidgets = shortcutGroup;
        this.allWidgets = groupedCards;
        this.loader.widgets = false;
      },
      error: () => {
        this.loader.widgets = false;
      },
    });
  }

  adjustShortcutWidgets(widgets: Widget[]) {
    let respWidgets = widgets || [];
    const currentShortcutsLength = widgets?.length || 0;
    const widgetsLength = this.totalShortcutsAllowed - currentShortcutsLength;
    respWidgets.map((x) => ((x.isShortcut = true), (x.isEditMode = this.isEditMode)));
    if (widgetsLength > 0) {
      for (let index = 0; index < widgetsLength; index++) {
        respWidgets.push(
          new Widget(
            '7',
            'My Shortcuts',
            'status',
            'My Shortcuts',
            'test',
            'fix',
            'categoryEnum',
            'categoryEnum',
            2,
            true,
            true,
            true,
            '',
          ),
        );
      }
    }
    return respWidgets;
  }

  addShortcut(widget: Widget) {
    const indexOfItemInArray = this.shortcutWidgets[0].widgets.findIndex((q) => q.isEmpty);
    if (indexOfItemInArray > -1) {
      const cloneWidget = { ...widget };
      widget.hideWidget = true;
      cloneWidget.isShortcut = true;

      // find item ---- TODO replace
      this.shortcutWidgets[0].widgets.splice(indexOfItemInArray, 1, cloneWidget);
    } else {
      // this.toasterService.show(CategoriesText.cannotAddShortCutMsg);
    }
  }

  removeShortcut(inputWidget: Widget) {
    const categoryId = inputWidget.categoryId;
    const indexOfItemInArray = this.shortcutWidgets[0].widgets.findIndex(
      (q) => q.categoryId === categoryId,
    );

    this.shortcutWidgets[0].widgets.splice(indexOfItemInArray, 1);
    this.shortcutWidgets[0].widgets = this.adjustShortcutWidgets(this.shortcutWidgets[0].widgets);
    for (const card of this.allWidgets) {
      for (const widget of card.widgets) {
        if (widget.categoryId === categoryId) {
          widget.hideWidget = false;
        }
      }
    }

    console.log(this.shortcutWidgets);
  }

  cancelChanges() {
    // this.modalService.openCancelChangesModal((cancel: boolean) => {
    //   this.modelResponse(cancel);
    // });
  }

  modelResponse(cancel: boolean) {
    if (cancel) {
      this.location.back();
    }
  }

  createPayload(): PostShortcut {
    const payloadWidgets = this.shortcutWidgets[0]?.widgets?.filter((x) => !x.isEmpty) || [];
    let payload: PostShortcut = new PostShortcut(this.userId, payloadWidgets);
    return payload;
  }

  saveWidgets() {
    this.loader.widgets = true;
    const postShortcut = this.createPayload();
    if (postShortcut.categories.length) {
      this.dashboardService.saveShortcuts(postShortcut).subscribe({
        next: () => {
          this.loader.widgets = false;
          this.location.back();
        },
        error: (error: any) => {
          this.loader.widgets = false;
          const messages = parseErrorMessage(error.error);
          // this.toasterService.dangerToast(messages);
        },
      });
    }
  }

  goBack() {
    const { root } = ROUTER_UTILS.home;
    this.router.navigate(['/', root]);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
