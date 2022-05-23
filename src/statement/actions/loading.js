import { LOADING_FINISH, LOADING_START } from '../../const/types';

export const startLoading = ( keyChange ) => ({
    type: LOADING_START,
    payload: keyChange
});
export const finishLoading = ( keyChange ) => ({
    type: LOADING_FINISH,
    payload: keyChange
});