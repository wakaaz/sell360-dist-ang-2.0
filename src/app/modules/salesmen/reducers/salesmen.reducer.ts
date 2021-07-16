import { ActionReducer, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { SalemanModel } from '../../shared/models/saleman.model';

export interface State extends EntityState<SalemanModel> { }

export const ADD_SALEMENS = '[ADD SALEMENS] Add Salemen Array';
export const addSalemens = (salemens: Array<SalemanModel>) => {
    return {
        type: ADD_SALEMENS as typeof ADD_SALEMENS,
        payload: salemens,
    };
};

export const ADD_SALEMAN = '[ADD SALEMAN] Add New Saleman';
export const addSaleman = ({
    id = null,
    name = '',
    cnic = '',
    phone = '',
    salary = null,
    segments_id = null,
    distributor_id = null
}) => {
    return {
        type: ADD_SALEMAN as typeof ADD_SALEMAN,
        payload: { id, name, cnic, phone, salary, segments_id, distributor_id },
    };
};

export const ADD_SALEMAN_STORAGE = '[ADD SALEMAN STORAGE] Add Saleman to list';
export const addSalemanStorage = ({
    id = null,
    name = '',
    cnic = '',
    phone = '',
    salary = null,
    segments_id = null,
    distributor_id = null
}) => {
    return {
        type: ADD_SALEMAN_STORAGE as typeof ADD_SALEMAN_STORAGE,
        payload: { id, name, cnic, phone, salary, segments_id, distributor_id },
    };
};

export const UPDATE_SALEMAN = '[UPDATE SALEMAN] Update Saleman';
export const updateSaleman = ({
    id = null,
    name = '',
    cnic = '',
    phone = '',
    salary = null,
    segments_id = null,
    distributor_id = null
}) => {
    return {
        type: UPDATE_SALEMAN as typeof UPDATE_SALEMAN,
        payload: { id, name, cnic, phone, salary, segments_id, distributor_id },
    };
};

export type SalemanActions =
    | ReturnType<typeof addSaleman>
    | ReturnType<typeof addSalemens>
    | ReturnType<typeof addSalemanStorage>
    |  ReturnType<typeof updateSaleman>;
export const adapter: EntityAdapter<SalemanModel> = createEntityAdapter<SalemanModel>({
    sortComparer: (a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()){
            return 1;
        } else {
            return -1;
        }
    }
});
export const initialState: State = adapter.getInitialState();

export function stateReducer(
    state = initialState,
    action: SalemanActions,
): State {
    switch (action.type) {
        case ADD_SALEMAN:
        case ADD_SALEMAN:
            return adapter.addOne(action.payload, state);

        case ADD_SALEMENS:
            return adapter.setAll(action.payload, state);

        case UPDATE_SALEMAN:
            return adapter.updateOne({id: action.payload.id, changes: action.payload}, state);

        default:
            return state;
    }
}

export function persistStateReducer(slemanReducer: ActionReducer<State>): any {
    const localStorageKey = '__saleman';
    return (state: State | undefined, action: Action) => {
        if (state === undefined) {
            const persisted = localStorage.getItem(localStorageKey);
            return persisted ? JSON.parse(persisted) : slemanReducer(state, action);
        }
        const nextState = slemanReducer(state, action);
        localStorage.setItem(localStorageKey, JSON.stringify(nextState));
        return nextState;
    };
}

export function updateStateReducer(salemanReducer: ActionReducer<State>): any {
    return (state: State | undefined, action: Action) => {
        if (action.type === 'UPDATE_SALEMAN') {
            return (action as any).payload.newState;
        }

        return salemanReducer(state, action);
    };
}

export function reducer(state: State | undefined, action: Action): any {
    return updateStateReducer(persistStateReducer(stateReducer))(state, action);
}

export const { selectIds, selectEntities, selectAll } = adapter.getSelectors();
