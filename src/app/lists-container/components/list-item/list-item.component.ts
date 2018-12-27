import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit
} from '@angular/core';
import { Item } from '../../lists-redux/lists.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux-app/app-state.model';
import { RemoveItem } from '../../lists-redux/items.actions';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit, AfterViewChecked {

  @Input() item: Item;

  name = 'name';

  constructor(
    private store: Store<AppState>,
    private zone: NgZone,
    private el: ElementRef,
    private cd: ChangeDetectorRef
  ) {

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('change name');
        this.name = 'changed name test';
        this.cd.detectChanges();
      }, 2000);
    });

  }

  ngAfterViewChecked() {}

  someFunction() {

    console.log('List Item', performance.now());

    return true;
  }

  get someVariable() {
    this.el.nativeElement.classList.add('background-red');

    this.zone.runOutsideAngular(() => {

      setTimeout(() => {
        this.el.nativeElement.classList.remove('background-red');
      }, 1000);

    });

    return true;
  }

  ngOnInit() {}

  removeItem(itemId: string, listId: string) {
    this.store.dispatch(new RemoveItem({
      itemId,
      listId
    }));
  }
}
