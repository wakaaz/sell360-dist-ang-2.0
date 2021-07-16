import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { fromEvent, EMPTY } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';
import {
    SalemanActions,
    ADD_SALEMAN,
    ADD_SALEMAN_STORAGE,
    UPDATE_SALEMAN,
} from '../../modules/salesmen/reducers/salesmen.reducer';

@Injectable()
export class LocalStorageSalemanEffects {
  // change this to `dispatch: true` to sync state with actions
  @Effect({ dispatch: false })
  onChange = fromEvent<StorageEvent>(window, 'storage').pipe(
    filter(evt => evt.key === '__actions'),
    filter(evt => evt.newValue !== null),
    map(evt => {
      const [{ type, payload }] = JSON.parse(evt.newValue);
      switch (type) {
        case ADD_SALEMAN:
          return { type: ADD_SALEMAN_STORAGE, payload };
        case UPDATE_SALEMAN:
          return { type: UPDATE_SALEMAN, payload };
        default:
          return EMPTY;
      }
    }),
  );

  @Effect({ dispatch: false })
  storeActions = this.actions.pipe(
    ofType(
        ADD_SALEMAN,
        UPDATE_SALEMAN,
    ),
    tap(action => {
      const storedActions = window.localStorage.getItem('__actions');
      const actions = storedActions ? JSON.parse(storedActions) : [];
      const newActions = [action, ...actions];
      window.localStorage.setItem('__actions', JSON.stringify(newActions));
    }),
  );

  // change this to `dispatch: true` to sync state with state
  @Effect({ dispatch: true })
  updateState = fromEvent<StorageEvent>(window, 'storage').pipe(
    filter(evt => evt.key === '__saleman'),
    filter(evt => evt.newValue !== null),
    map(evt => {
      const newState = JSON.parse(evt.newValue);
      return { type: 'UPDATE_SALEMAN', payload: { newState } };
    }),
  );

  constructor(private actions: Actions<SalemanActions>) {}
}
