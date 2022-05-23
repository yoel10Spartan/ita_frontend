import axios from "axios";

import {
    AUTH_REGISTER,
    DELETE_DATA_USER
} from "../../const/types";

const getHeaders = () => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

export const authRegister = (data: any) => {
    return async (dispatch: Function) => {

        const body = JSON.stringify(data);

        const config = {
            headers: getHeaders(),
        };

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1.0/auth/register/`, body, config
            );

            dispatch({
                type: AUTH_REGISTER,
                payload: res.data.user
            });

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('refresh', res.data.refresh);

        } catch (error) {
            console.log(error);
        }
    }
}

export const authRefresh = () => {
    return async (dispatch: Function) => {

        const config = {
            headers: getHeaders(),
        };

        const refresh = localStorage.getItem('refresh');

        const data = JSON.stringify({
            "refresh": refresh,
        })

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1.0/auth/refresh/`, data, config
            );

            localStorage.setItem('token', res.data.access);

        } catch (error) {
            console.log(error);
        }
    }
}

export const authRefreshData = () => {
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
                `${process.env.REACT_APP_API_URL}/api/v1.0/auth/refresh_data/`, config
            );

            dispatch({
                type: AUTH_REGISTER,
                payload: res.data
            });

        } catch (error) {
            console.log(error);
        }
    }
}

interface authLoginInterface {
    email: string
    password: string
}

export const authLogin = (dataCredentials: authLoginInterface) => {
    return async (dispatch: Function) => {

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };

        const data = JSON.stringify(dataCredentials);

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/v1.0/auth/login/`, data, config
            );

            dispatch({
                type: AUTH_REGISTER,
                payload: res.data.user
            });

            localStorage.setItem('token', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);

        } catch (error) {
            console.log(error);
        }
    }
}

export const authLogout = () => {
    return async (dispatch: Function) => {

        localStorage.removeItem('token');
        localStorage.removeItem('refresh');

        dispatch({
            type: DELETE_DATA_USER
        });
    }
}