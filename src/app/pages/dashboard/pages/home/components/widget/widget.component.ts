import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORIES, CATEGORIES_EDIT, HOME } from 'src/app/core/utils/page-keys';
import { ROUTER_UTILS } from 'src/app/core/utils/router.utils';
import { WidgetStatus } from 'src/app/core/utils/widgetStatus';
import { Card } from 'src/app/pages/dashboard/models/card';
import { Widget } from 'src/app/pages/dashboard/models/widget';
import { routeWidgetMap } from '../../utils/routeWidgetMap';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent implements OnInit {
  @Input() screen: string = '';

  @Input() groupedWidgets?: Card[];

  @Input() showBrowseAllLink = false;

  @Input() showEditLink = false;

  @Input() isShortcut = false;

  @Output() addShortcutHandler = new EventEmitter();

  @Output() removeShortcutHandler = new EventEmitter();

  isHome: boolean = false;

  isCategoryEdit: boolean = false;

  isCategories: boolean = false;

  NEW: string = WidgetStatus.New;

  categoriesUrl: string[] = ['/', ROUTER_UTILS.home.categories];

  categoriesEditUrl: string[] = ['/', ROUTER_UTILS.home.categories, 'edit'];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isHome = this.screen === HOME;
    this.isCategories = this.screen === CATEGORIES;
    this.isCategoryEdit = this.screen === CATEGORIES_EDIT;
  }

  iconHandler(widget: Widget) {
    if (!widget.isEditMode) {
      const categoryEnum: string = widget.categoryEnum;
      const routeToNavigate: string = routeWidgetMap[categoryEnum] || '';
      this.router.navigateByUrl(routeToNavigate);
    }
  }

  addShortcut(widget: Widget) {
    this.addShortcutHandler.emit(widget);
  }

  removeShortcut(widget: Widget) {
    this.removeShortcutHandler.emit(widget);
  }
}
