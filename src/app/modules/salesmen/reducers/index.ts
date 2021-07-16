import { ActionReducerMap } from '@ngrx/store';

import * as salemen from './salesmen.reducer';
import * as root from '../../../reducer';

export interface SalemanState {
    salemen: salemen.State;
}

export interface State extends root.State {
    salemen: SalemanState;
}

export const reducers: ActionReducerMap<SalemanState> = {
    salemen: salemen.reducer
};

export { salemen };
