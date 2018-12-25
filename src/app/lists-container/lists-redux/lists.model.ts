export interface Item {
  text: string;
  id: string;
  listId: string;
}

export interface List {
  id: string;
  name: string;
  items: string[];
}

export interface Items {
  byId: {
    [itemId: string]: Item
  };
  allIds: string[];
}

export interface Lists {
  byId: {
    [listId: string]: List
  };
  allIds: string[];
}

export function getNewLists(): Lists {
  return {
    byId: {},
    allIds: []
  };
}

export function getNewItems(): Items {
  return {
    byId: {},
    allIds: []
  };
}
