import axios from "axios";
import { ADD_NEW_EVALUATION, GET_ALL_EVALUATIONS, SET_BACK_SUCCESS_EXCERCISE, SET_SUCCESS_EXCERCISE } from "../../const/types";

interface InfoNewEvaluationInterface {
    topic: string,
    subtopic: string
    created_by: number
}

export const addEvaluationPOST = (evaluation_data: InfoNewEvaluationInterface) => {
    return async (dispatch: Function) => {

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        const data = JSON.stringify(evaluation_data);

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1.0/evaluation/`, data, config
            );

            dispatch({
                type: ADD_NEW_EVALUATION,
                payload: res.data,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const evaluationGET = () => {
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
                `${process.env.REACT_APP_API_URL}/api/v1.0/evaluation/`, config
            );

            dispatch({
                type: GET_ALL_EVALUATIONS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const evaluationPUT = (pk: number, exercises: number[]) => {
    return async (dispatch: Function) => {

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        const data = JSON.stringify({ exercises })

        try {
            const res = await axios.put(
                `${process.env.REACT_APP_API_URL}/api/v1.0/evaluation/${pk}/update_evaluation/`, data, config
            );
            
        } catch (error) {
            console.log(error);
        }
    }
}