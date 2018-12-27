import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from './redux-app/app-state.model';
import {Store} from '@ngrx/store';
import {AddList} from './lists-container/lists-redux/lists.actions';
import {genUniqId} from './helpers/helper.utils';

let counter = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  appState$: Observable<AppState>;

  appState: AppState;

  constructor(private store: Store<AppState>) {
    this.appState$ = store.select('app');

    this.appState$.subscribe((state: AppState) => {
      this.appState = state;
    });
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
