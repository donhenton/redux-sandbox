import {combineReducers } from 'redux';
import {restaurants,currentRestaurantId,eventType} from './restaurantReducer';


const rootReducer = combineReducers({
  restaurants: restaurants,
  currentRestaurantId: currentRestaurantId,
  eventType: eventType
});                     

export default rootReducer;