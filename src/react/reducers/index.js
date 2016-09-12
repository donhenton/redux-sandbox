import { combineReducers } from 'redux';
import RestaurantReducer from './restaurantReducer';

const rootReducer = combineReducers({
  weather: RestaurantReducer
});

export default rootReducer;