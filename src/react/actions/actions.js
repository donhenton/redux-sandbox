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
    
    setCurrentRestaurantId(id)
    {
        return {'type': 'SET_ID', 'payload':  {'id': id.toString() }  } ;
    }

}

let instance = new ActionHandler(); // the instance of the class

let init = instance.initialize.bind(instance); // bind the function of the instance to 'this'
export  {init as initialize}; //export it to be available to react classes

let setId = instance.setCurrentRestaurantId.bind(instance);
export {setId as setCurrentRestaurantId};
