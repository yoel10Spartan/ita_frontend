import { 
    ADD_NEW_EVALUATION, GET_ALL_EVALUATIONS,
} from "../../const/types";

interface ActionInterface {
    type: string
    payload: any
}

const initState = {
    new_evaluation: [],
    evaluations: [],
}

export const evaluationReducer = ( state = initState, action: ActionInterface ) => {
    const { 
        type, 
        payload 
    } = action;

    switch ( type ) {

        case ADD_NEW_EVALUATION: 
            return {
                ...state,
                new_evaluation: [ ...state.new_evaluation, payload ],
            }

        case GET_ALL_EVALUATIONS:
            return {
                ...state,
                evaluations: payload
            }

        default:
            return state;
    }
}