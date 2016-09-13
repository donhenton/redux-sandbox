 

//https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/guides/reducers.md


class ActionHandler
{

    constructor()
    {
         
        
    }
    initialize(payload)
    {

        //let payload = this.restaurantService.getAllRestaurants();

        return {type: 'INITIALIZE', 'payload': payload};
    }
    
    selectRestaurant(payload)
    {
        return {'type': 'SELECT_RESTAURANT', 'payload':  payload  } ;
    }
    
    selectReview(payload)
    {
        return {'type': 'SELECT_REVIEW', 'payload':  payload } ;
    }

}

let instance = new ActionHandler(); // the instance of the class

let init = instance.initialize.bind(instance); // bind the function of the instance to 'this'
export  {init as initialize}; //export it to be available to react classes

let setSel = instance.selectRestaurant.bind(instance);
export {setSel as selectRestaurant};

let setRev  = instance.selectReview.bind(instance);
export {setRev  as selectReview};