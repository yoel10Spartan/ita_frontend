import axios from "axios";

import { 
    GET_TOPICS,
    GET_SUBTOPICS,
    RESET_TOPICS,
    GET_TOPICS_SUBTOPICS
} from "../../const/types";

export const topicsGET = () => {
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
                `${process.env.REACT_APP_API_URL}/api/v1.0/topic/`, config
            );

            dispatch({
                type: GET_TOPICS,
                payload: res.data
            });

        } catch (error) {
            console.log(error);
        }
    }
}

export const subtopicsGET = (id: number) => {
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
                `${process.env.REACT_APP_API_URL}/api/v1.0/subtopic/${id}/get_for_topic/`, config
            );

            dispatch({
                type: GET_SUBTOPICS,
                payload: res.data
            });

        } catch (error) {
            console.log(error);
        }
    }
}

export const topics_subtopicsGET = () => {
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
                `${process.env.REACT_APP_API_URL}/api/v1.0/subtopic/`, config
            );

            dispatch({
                type: GET_TOPICS_SUBTOPICS,
                payload: res.data
            });

        } catch (error) {
            console.log(error);
        }
    }
}

export const resetTopics = () => ({
    type: RESET_TOPICS
})