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
import {Store} from '@ngrx/store';
import {AppState} from '../redux-app/app-state.model';
import {List} from './lists-redux/lists.model';
import {AddItem} from './lists-redux/items.actions';
import {genUniqId} from '../helpers/helper.utils';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lists-container',
  templateUrl: './lists-container.component.html',
  styleUrls: ['./lists-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListsContainerComponent implements OnInit, AfterViewChecked {

  @Input() listItem: List;

  appState$: Observable<AppState>;

  appState: AppState;

  myText = '';

  name = 'name';

  constructor(
    private store: Store<AppState>,
    private zone: NgZone,
    private el: ElementRef,
    private cd: ChangeDetectorRef
  ) {

    this.appState$ = store.select('app');

    this.appState$.subscribe((state: AppState) => {
      this.appState = state;
    });

    // this.zone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     console.log('change name');
    //     this.name = 'changed name';
    //     this.cd.markForCheck();
    //   }, 2000);
    // });

  }

  get someVariable() {
    this.el.nativeElement.classList.add('background-blue');

    console.log('List', performance.now() );

    this.zone.runOutsideAngular(() => {

      setTimeout(() => {
        this.el.nativeElement.classList.remove('background-blue');
      }, 1000);

    });

    return true;
  }

  ngAfterViewChecked() {}

  ngOnInit() {}

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
