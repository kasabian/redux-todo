import { All as AppActionsListsTypes} from '../lists-container/lists-redux/lists.actions';
import { All as AppActionsItemsTypes} from '../lists-container/lists-redux/items.actions';

export type AppActionsTypes = AppActionsListsTypes | AppActionsItemsTypes;
