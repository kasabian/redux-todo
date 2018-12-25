import {
  Component,
  Input,
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
export class ListItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  removeItem(itemId: string, listId: string) {
    this.store.dispatch(new RemoveItem({
      itemId,
      listId
    }));
  }

}
