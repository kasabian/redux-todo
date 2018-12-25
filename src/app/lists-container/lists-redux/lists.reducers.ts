import {List, Lists} from './lists.model';
import {ActionTypes} from './lists.actions';
import {ActionTypes as ItemsTypes} from './items.actions';
import {AppActionsTypes} from '../../redux-app/app.actions';

export function listsReducer(state: Lists, action: AppActionsTypes): Lists {
  switch (action.type) {
    case ActionTypes.ADD_LIST:
      return addListReducer(state, action.payload);
    case ActionTypes.REMOVE_LIST:
      return removeListReducer(state, action.payload);

    // relationships to items
    case ItemsTypes.ADD_ITEM:
      return addItemToListReducer(state, action.payload);

    case ItemsTypes.REMOVE_ITEM:
      return removeItemFromListReducer(state, action.payload);
    default :
      return state;
  }
}

export function removeItemFromListReducer(state: Lists, payload: { itemId: string, listId: string }): Lists {
  return {
    ...state,
    byId: {
      ...state.byId,
      [payload.listId]: {
        ...state.byId[payload.listId],
        items: state.byId[payload.listId].items.filter((id) => id !== payload.itemId)
      }
    }
  };
}

export function addItemToListReducer(state: Lists, payload: any): Lists {
  const { item } = payload;

  return {
    ...state,
    byId: {
      ...state.byId,
      [item.listId]: {
        ...state.byId[item.listId],
        items: [item.id, ...state.byId[item.listId].items]
      }
    }
  };
}

export function addListReducer(state: Lists, payload: { item: List }): Lists {
  const { item } = payload;

  return {
    ...state,
    byId: {
      ...state.byId,
      [item.id]: item
    },
    allIds: [item.id, ...state.allIds]
  };
}

export function removeListReducer(state: Lists, payload: { itemId: string }): Lists {
  return state;
}
