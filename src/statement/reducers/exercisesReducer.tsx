import { 
    GET_EXCERCISES,
    SET_BACK_SUCCESS_EXCERCISE,
    SET_SUCCESS_EXCERCISE
} from "../../const/types";

interface ActionInterface {
    type: string
    payload: any
}

const initState = {
    sendExercise: false,
    excercises: [],
}

export const exercisesReducer = ( state = initState, action: ActionInterface ) => {
    const { 
        type, 
        payload 
    } = action;

    switch ( type ) {

        case SET_SUCCESS_EXCERCISE: 
            return {
                ...state,
                sendExercise: true,
            }

        case SET_BACK_SUCCESS_EXCERCISE: 
            return {
                ...state,
                sendExercise: false,
            }

        case GET_EXCERCISES: 
            return {
                ...state,
                excercises: payload,
            }

        default:
            return state;
    }
}