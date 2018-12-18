import { AppState, initState } from './app-state.model';
import {ActionTypes, All} from '../lists-container/lists-redux/lists.actions';
import {Item} from '../lists-container/lists-redux/lists.model';

export function appReducer(state: AppState = initState(), action: All): AppState {

  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return appItemReducer(state, action.payload);
    case ActionTypes.REMOVE_ITEM:
      return removeItemReducer(state, action.payload);
    default :
      return state;
  }
}

export function removeItemReducer(state: AppState, payload: { itemId: string }) {
  const { itemId } = payload,
    newItems = state.lists.items;

  return {
    ...state,
    lists: {
      ...state.lists,
      items: newItems.filter((item) => {
        return item.id !== itemId;
      } )
    }
  };
}

export function appItemReducer(state: AppState, payload: { item: Item }): AppState {
  const { item } = payload,
        newItems = state.lists.items;

  return {
    ...state,
    lists: {
      ...state.lists,
      items: [item, ...newItems]
    }
  };
}

