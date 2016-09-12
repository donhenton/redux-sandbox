import RestaurantService from './../services/restaurantService';

//https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/guides/reducers.md


class ActionHandler
{

    constructor()
    {
        this.restaurantService = new RestaurantService();
        
    }
    initialize()
    {

        let payload = this.restaurantService.getAllRestaurants();

        return {type: 'INITIALIZE', 'payload': payload};
    }
    
    setCurrentRestaurant(id)
    {
        return {'type': 'SET_ID', 'payload':  {'id': id.toString() }  } ;
    }
    
    setCurrentReview(idx)
    {
        return {'type': 'SET_REVIEW_IDX', 'payload':  {'idx': idx }  } ;
    }

}

let instance = new ActionHandler(); // the instance of the class

let init = instance.initialize.bind(instance); // bind the function of the instance to 'this'
export  {init as initialize}; //export it to be available to react classes

let setId = instance.setCurrentRestaurant.bind(instance);
export {setId as setCurrentRestaurant};
