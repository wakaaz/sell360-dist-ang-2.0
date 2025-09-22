import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { fromEvent, EMPTY } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';
import {
  SalemanActions,
  ADD_SALEMAN,
  ADD_SALEMAN_STORAGE,
  UPDATE_SALEMAN,
} from '../../modules/salesmen/reducers/salesmen.reducer';
import { localStorageKeys } from '../constants/localstorage.constants';

@Injectable()
export class LocalStorageSalemanEffects {
  // change this to `dispatch: true` to sync state with actions
  onChange = createEffect(
    () =>
      fromEvent<StorageEvent>(window, 'storage').pipe(
        filter((evt) => evt.key === localStorageKeys.actions),
        filter((evt) => evt.newValue !== null),
        map((evt) => {
          const [{ type, payload }] = JSON.parse(evt.newValue);
          switch (type) {
            case ADD_SALEMAN:
              return { type: ADD_SALEMAN_STORAGE, payload };
            case UPDATE_SALEMAN:
              return { type: UPDATE_SALEMAN, payload };
            default:
              return EMPTY;
          }
        })
      ),
    { dispatch: false }
  );

  storeActions: any;
  updateState: any;

  constructor(private actions: Actions<SalemanActions>) {
    this.storeActions = createEffect(
      () =>
        this.actions.pipe(
          ofType(ADD_SALEMAN, UPDATE_SALEMAN),
          tap((action) => {
            const storedActions = window.localStorage.getItem(
              localStorageKeys.actions
            );
            const actions = storedActions ? JSON.parse(storedActions) : [];
            const newActions = [action, ...actions];
            window.localStorage.setItem(
              localStorageKeys.actions,
              JSON.stringify(newActions)
            );
          })
        ),
      { dispatch: false }
    );

    // change this to `dispatch: true` to sync state with state
    this.updateState = createEffect(
      () =>
        fromEvent<StorageEvent>(window, 'storage').pipe(
          filter((evt) => evt.key === localStorageKeys.saleman),
          filter((evt) => evt.newValue !== null),
          map((evt) => {
            const newState = JSON.parse(evt.newValue);
            return { type: 'UPDATE_SALEMAN', payload: { newState } };
          })
        ),
      { dispatch: true }
    );
  }
}
