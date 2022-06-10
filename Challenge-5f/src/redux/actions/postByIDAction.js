import {
    GET_CAR_BY_ID
} from "../types";

export const saveCarById = (data) => {
    return (dispatch) => {
        dispatch({
            type: `${GET_CAR_BY_ID}_FULFILLED`,
            payload: data
        });
    }
}