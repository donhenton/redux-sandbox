
import RestaurantDao from './restaurantDao';
import {initialize, selectRestaurant} from './../actions/actions';
import utils from './../utils/utils';

class RestaurantService
{

    constructor()
    {
        this.dao = new RestaurantDao();
        this.store = null;
        this.currentRestaurant = null;
        this.currentReview = null;
        this.currentRestaurantKey = null;
        this.currentReviewKey = null;
        this.restaurants = null;
    }

    setStore(store)
    {
        this.store = store;
    }

    generateStateMessage()
    {



        let message = {
            restaurants: this.restaurants,
            currentRestaurant: this.currentRestaurant,
            currentReviews: this.currentReviews,
            selectedReview: this.selectedReview
        }

        return message;
    }

    getAllRestaurants()
    {
        this.dao.getAllRestaurants()
                .then((data) => {
                    this.restaurants = data;
                    this.currentRestaurant = data[2];
                    this.currentReviews = data[2].reviewDTOs;
                    this.selectedReview = data[2].reviewDTOs[0];
                    this.store.dispatch(initialize(this.generateStateMessage()));
                })
    }

    setCurrentRestaurant(idStr)
    {
        let foundItem = this.restaurants.filter((r) => {
            return r.id.toString() === idStr;
        });
        if (foundItem && foundItem.length)
        {
            this.currentRestaurant = foundItem[0];
            this.currentReviews = this.currentRestaurant.reviewDTOs;
            this.selectedReview = this.currentRestaurant.reviewDTOs[0];
        }

        this.store.dispatch(selectRestaurant(this.generateStateMessage()));


    }

}

let instance = new RestaurantService();
export default instance;



 