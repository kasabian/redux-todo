import {
  getNewLists,
  Lists
} from '../lists-container/lists-redux/lists.model';

export interface AppState {
  lists: Lists;
}

export function initState(): AppState {
  return {
    lists: getNewLists()
  };
}
