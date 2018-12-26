import {AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnChanges, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../redux-app/app-state.model';
import {Items, List} from './lists-redux/lists.model';
import {AddItem} from './lists-redux/items.actions';
import {genUniqId} from '../helpers/helper.utils';

@Component({
  selector: 'app-lists-container',
  templateUrl: './lists-container.component.html',
  styleUrls: ['./lists-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListsContainerComponent implements OnInit, AfterViewChecked, OnChanges {

  @Input() listItem: List;
  @Input() items: Items;

  myText = '';

  name = 'name';

  constructor(
    private store: Store<AppState>,
    private zone: NgZone,
    private el: ElementRef
  ) {

    setTimeout(() => {
      console.log('change name');
      this.name = 'change name';
    }, 2000);

  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

  ngAfterViewChecked() {
    console.log('hi');
  }

  ngOnChanges() {
    this.el.nativeElement.classList.add('background-blue');

    this.zone.runOutsideAngular(() => {

      setTimeout(() => {
        this.el.nativeElement.classList.remove('background-blue');
      }, 1000);

    });
  }

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
