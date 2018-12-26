import {
  AfterViewChecked,
  Component, ElementRef,
  Input, NgZone,
  OnInit
} from '@angular/core';
import { Item } from '../../lists-redux/lists.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux-app/app-state.model';
import { RemoveItem } from '../../lists-redux/items.actions';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, AfterViewChecked {

  @Input() item: Item;

  constructor(
    private store: Store<AppState>,
    private zone: NgZone,
    private el: ElementRef
  ) { }

  ngAfterViewChecked() {
    this.el.nativeElement.classList.add('background-red');

    this.zone.runOutsideAngular(() => {

      setTimeout(() => {
        this.el.nativeElement.classList.remove('background-red');
      }, 1000);

    });
  }

  ngOnInit() {}

  removeItem(itemId: string, listId: string) {
    this.store.dispatch(new RemoveItem({
      itemId,
      listId
    }));
  }
}
