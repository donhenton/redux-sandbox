import {combineReducers } from 'redux';
import {loading,restaurants,currentRestaurant,eventType,currentReviews,selectedReview} from './restaurantReducer';


const rootReducer = combineReducers({
  restaurants: restaurants,
  currentRestaurant: currentRestaurant,
  currentReviews: currentReviews,
  selectedReview: selectedReview,
  eventType: eventType,
  loading: loading
});                     

export default rootReducer;