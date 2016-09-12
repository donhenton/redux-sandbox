import {combineReducers } from 'redux';
import {restaurants,currentRestaurant,eventType} from './restaurantReducer';


const rootReducer = combineReducers({
  restaurants: restaurants,
  currentRestaurant: currentRestaurant,
  eventType: eventType
});                     

export default rootReducer;