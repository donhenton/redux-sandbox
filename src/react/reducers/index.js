import {combineReducers } from 'redux';
import {restaurants,currentRestaurant,eventType,currentReviews,selectedReview} from './restaurantReducer';


const rootReducer = combineReducers({
  restaurants: restaurants,
  currentRestaurant: currentRestaurant,
  currentReviews: currentReviews,
  selectedReview: selectedReview,
  eventType: eventType
});                     

export default rootReducer;