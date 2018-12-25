import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../redux-app/app-state.model';
import {Items, List} from './lists-redux/lists.model';
import {AddItem} from './lists-redux/items.actions';
import {genUniqId} from '../helpers/helper.utils';

@Component({
  selector: 'app-lists-container',
  templateUrl: './lists-container.component.html',
  styleUrls: ['./lists-container.component.scss']
})
export class ListsContainerComponent implements OnInit {

  @Input() listItem: List;
  @Input() items: Items;

  myText = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
  }

  addItem() {

    if (!this.myText) {
      return ;
    }

    this.store.dispatch(new AddItem({
      item: {
        id: genUniqId(),
        text: this.myText,
        listId: this.listItem.id
      }
    }));

    this.myText = '';
  }

}
