import { Action } from '@ngrx/store';
import { Item } from './lists.model';


export enum ActionTypes {
  ADD_ITEM = '[ITEMS] addItem',
  REMOVE_ITEM = '[ITEMS] removeItem',
  UPDATE_ITEM = '[ITEMS] updateItem',
}

export class AddItem implements Action {
  readonly type = ActionTypes.ADD_ITEM;

  constructor(public payload: {
    item: Item
  }) {}
}

export class UpdateItem implements Action {
  readonly type = ActionTypes.UPDATE_ITEM;
  constructor(public payload: {
    item: {
      text: string;
    },
    itemId: string
  }) {}
}

export class RemoveItem implements Action {
  readonly type = ActionTypes.REMOVE_ITEM;

  constructor(public payload: { itemId: string, listId: string }) {}
}

export type All
  = AddItem |
    UpdateItem |
    RemoveItem;
