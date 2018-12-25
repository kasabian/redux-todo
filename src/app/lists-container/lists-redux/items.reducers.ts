import { Item, Items } from './lists.model';
import { ActionTypes } from './items.actions';
import { AppActionsTypes } from '../../redux-app/app.actions';

export function itemsReducers(state: Items, action: AppActionsTypes): Items {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return addItemReducer(state, action.payload);
    case ActionTypes.REMOVE_ITEM:
      return removeItemReducer(state, action.payload);
    default :
      return state;
  }
}

export function addItemReducer(state: Items, payload: { item: Item }): Items {
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

export function removeItemReducer(state: Items, payload: { itemId: string, listId: string }) {
  const { itemId } = payload,
    nextState = Object.assign({}, state);

  delete nextState.byId[itemId];

  nextState.allIds = state.allIds.filter((id) => id !== itemId);

  return nextState;
}
