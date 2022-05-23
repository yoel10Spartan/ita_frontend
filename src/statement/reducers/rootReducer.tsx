import { combineReducers } from "redux";
import { evaluationReducer } from "./evaluationReducer";
import { exercisesReducer } from "./exercisesReducer";
import { topicsReducer } from "./topicsReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    topics: topicsReducer,
    exercises: exercisesReducer, 
    evaluation: evaluationReducer,
});