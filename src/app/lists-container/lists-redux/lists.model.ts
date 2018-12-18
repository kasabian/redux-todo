export interface Item {
  text: string;
  id: string;
}

export interface Lists {
  name: string;
  items: Item[];
}

export function getNewLists(): Lists {
  return {
    name: 'test',
    items: [
      {
        id: 'my_id',
        text: 'myText'
      }
    ]
  };
}
