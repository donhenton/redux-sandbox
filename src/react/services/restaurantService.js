import RestaurantDao from './restaurantDao';
import utils from './../utils/utils';

class RestaurantService
{

    constructor()
    {
        this.dao = new RestaurantDao();
        this.store = null;
        this.currentRestaurant = null;
        this.currentReviews = null;
        this.selectedReview = null;
        this.restaurants = null;
    }

    /**
     * set the reference to the redux store
     * @param {type} store
     * @returns {undefined}
     */
    setStore(store)
    {
        this.store = store;
    }

    /**
     * Generate the actions that set the redux store
     * 
     * @param {type} type
     * @returns {RestaurantService.generateAction.restaurantServiceAnonym$0}
     */
    generateAction(type)
    {



        let payload = {
            restaurants: this.restaurants,
            currentRestaurant: this.currentRestaurant,
            currentReviews: this.currentReviews,
            selectedReview: this.selectedReview
        }

        return {type: type, 'payload': payload};
         
    }

    /**
     * REST call to get the list of restaurants
     * @returns {undefined}
     */
    getAllRestaurants()
    {
        this.dao.getAllRestaurants()
                .then((data) => {
                    this.restaurants = data;
                    this.currentRestaurant = data[2];
                    this.currentReviews = data[2].reviewDTOs;
                    this.selectedReview = data[2].reviewDTOs[0];
                    this.store.dispatch(this.generateAction('INITIALIZE'));
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

        this.store.dispatch(this.generateAction('SELECT_RESTAURANT'));


    }

    setCurrentReview(idStr)
    {
        let found = this.currentReviews
                .filter((f) => {
                    return  f.id.toString() === idStr;
                });
        if (found && found.length && found.length === 1)
        {
            this.selectedReview = found[0];
        }
        this.store.dispatch(this.generateAction('SELECT_REVIEW'));
    }

}

let instance = new RestaurantService();
export default instance;



 