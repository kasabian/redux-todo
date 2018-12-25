import {AppState, initState} from './app-state.model';
import {listsReducer} from '../lists-container/lists-redux/lists.reducers';
import {itemsReducers} from '../lists-container/lists-redux/items.reducers';

export function appReducer(state: AppState = initState(), action: any): AppState {
    return {
      lists: listsReducer(state.lists, action),
      items: itemsReducers(state.items, action)
    };
}
