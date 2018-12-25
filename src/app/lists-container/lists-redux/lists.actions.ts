import { Action } from '@ngrx/store';
import { List } from './lists.model';

export enum ActionTypes {
  ADD_LIST = '[LISTS] addList',
  REMOVE_LIST = '[LISTS] removeList',
  UPDATE_LIST = '[LISTS] updateList',
}

export class AddList implements Action {
  readonly type = ActionTypes.ADD_LIST;

  constructor(public payload: {
    item: List
  }) {}
}

export class UpdateList implements Action {
  readonly type = ActionTypes.UPDATE_LIST;
  constructor(public payload: {
    item: {
      text: string;
    },
    itemId: string
  }) {}
}

export class RemoveList implements Action {
  readonly type = ActionTypes.REMOVE_LIST;

  constructor(public payload: { itemId: string }) {}
}

export type All
  = AddList |
  UpdateList |
  RemoveList;
