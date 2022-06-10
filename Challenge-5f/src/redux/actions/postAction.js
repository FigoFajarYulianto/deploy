import axios from "axios";
import {
    GET_CARS
} from "../types";

export const getCars = () => {
    return (dispatch) => {
        dispatch({
            type: `${GET_CARS}_LOADING`
        });

        axios({
            method: 'GET',
            url: 'https://62601c3e53a42eaa0700492d.mockapi.io/api/v1/cars'
        }).then((res) => {
            dispatch({
                type: `${GET_CARS}_FULFILLED`,
                payload: res.data
            });
        }).catch((err) => {
            dispatch({
                type: `${GET_CARS}_ERROR`,
                error: err.message
            })
        })
    }
}
