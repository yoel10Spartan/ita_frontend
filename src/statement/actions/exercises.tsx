import axios from "axios";
import { GET_EXCERCISES, SET_BACK_SUCCESS_EXCERCISE, SET_SUCCESS_EXCERCISE } from "../../const/types";

interface exerciseInterface {
    text: string
    topic: number | null
    sub_topic: number | null
    type: string
    added_by: number
}

export const exercisePOST = (exercise_data: exerciseInterface) => {
    return async (dispatch: Function) => {

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        const data = JSON.stringify(exercise_data);

        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1.0/exercises/`, data, config
            );

            dispatch({
                type: SET_SUCCESS_EXCERCISE
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const exerciseGET = () => {
    return async (dispatch: Function) => {

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/v1.0/exercises/`, config
            );

            dispatch({
                type: GET_EXCERCISES,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const backExcersiseSuccess = () => ({
    type: SET_BACK_SUCCESS_EXCERCISE,
})