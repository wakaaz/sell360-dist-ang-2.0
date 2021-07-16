import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';


export interface State {
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
};

export const metaReducers = [storeFreeze];
