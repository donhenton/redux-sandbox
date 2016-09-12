import {combineReducers } from 'redux';
import {restaurants,currentRestaurant,eventType,currentReviews} from './restaurantReducer';


const rootReducer = combineReducers({
  restaurants: restaurants,
  currentRestaurant: currentRestaurant,
  currentReviews: currentReviews,
  eventType: eventType
});                     

export default rootReducer;