import { combineReducers } from 'redux';
import RestaurantReducer from './restaurantReducer';

const rootReducer = combineReducers({
  restaurantData: RestaurantReducer
});

export default rootReducer;