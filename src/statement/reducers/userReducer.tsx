import { 
    AUTH_REGISTER, DELETE_DATA_USER
} from "../../const/types";

interface ActionInterface {
    type: string
    payload: any
}

const initState = {
    user: {},
}

export const userReducer = ( state = initState, action: ActionInterface ) => {
    const { type, payload } = action;

    switch ( type ) {

        case AUTH_REGISTER: 
            return {
                user: { ...payload },
            }

        case DELETE_DATA_USER:
            return {
                user: {}
            }

        default:
            return state;
    }
}