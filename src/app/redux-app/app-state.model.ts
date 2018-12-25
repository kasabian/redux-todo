import {
  getNewItems,
  getNewLists,
  Items,
  Lists
} from '../lists-container/lists-redux/lists.model';

export interface AppState {
  lists: Lists;
  items: Items;
}

export function initState(): AppState {
  return {
    lists: getNewLists(),
    items: getNewItems()
  };
}
