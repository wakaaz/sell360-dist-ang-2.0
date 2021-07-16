import { createSelector, createFeatureSelector } from '@ngrx/store';

import { SalemanState, State, salemen as fromSalemen } from '../reducers';

export const salemensState = createFeatureSelector<State, SalemanState> (
    'salemen',
);

export const getSalemenState = createSelector(
    salemensState,
    state => state.salemen,
);

export const getSalemen = createSelector(
    getSalemenState,
    fromSalemen.selectAll,
);
