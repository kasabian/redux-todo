import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from './redux-app/app-state.model';
import {Store} from '@ngrx/store';
import {AddList} from './lists-container/lists-redux/lists.actions';
import {genUniqId} from './helpers/helper.utils';

let counter = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appState$: Observable<AppState>;

  constructor(private store: Store<AppState>) {
    this.appState$ = store.select('app');
  }

  addList() {
    this.store.dispatch(new AddList({
      item: {
        id: genUniqId(),
        name: 'list: ' + (++counter),
        items: []
      }
    }));
  }
}
