import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../redux-app/app-state.model';
import {AddItem} from './lists-redux/lists.actions';
import { Observable } from 'rxjs';

let id = 0;

@Component({
  selector: 'app-lists-container',
  templateUrl: './lists-container.component.html',
  styleUrls: ['./lists-container.component.scss']
})
export class ListsContainerComponent implements OnInit {

  lists$: Observable;

  myText = '';

  constructor(private store: Store<AppState>) {
    this.lists$ = this.store.select('app');
  }

  ngOnInit() {
  }

  addItem() {

    if (!this.myText) {
      return ;
    }

    this.store.dispatch(new AddItem({
      item: {
        id: (++id).toString(),
        text: this.myText
      }
    }));

    this.myText = '';
  }

}
