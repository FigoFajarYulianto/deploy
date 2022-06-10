import { combineReducers } from "redux";
import carsReducer from './postReducer';
import carByIdReducer from './postByIDReducer';


export default combineReducers({
    cars: carsReducer,
    carById: carByIdReducer
});
