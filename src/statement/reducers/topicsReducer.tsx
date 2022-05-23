import { 
    GET_TOPICS, GET_SUBTOPICS, RESET_TOPICS, GET_TOPICS_SUBTOPICS
} from "../../const/types";

interface ActionInterface {
    type: string
    payload: any
}

const initState = {
    topics: [],
    subtopics: [],
    topics_subtopics: [],
}

export const topicsReducer = ( state = initState, action: ActionInterface ) => {
    const { type, payload } = action;

    switch ( type ) {

        case GET_TOPICS: 
            return {
                ...state,
                topics: [ ...payload ],
            }

        case GET_SUBTOPICS:
            return {
                ...state,
                subtopics: [ ...payload ]
            }

        case GET_TOPICS_SUBTOPICS:
            return {
                ...state, 
                topics_subtopics: payload,
            }

        case RESET_TOPICS: 
            return {
                topics: [],
                subtopics: [],
                topics_subtopics: [],
            }

        default:
            return state;
    }
}