

//https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/guides/reducers.md

class RestaurantReducer
{

    constructor()
    {

    }

    restaurantsStateFunction(state = {}, action)
    {
        switch (action.type)
        {

            case "INITIALIZE":

                return  action.payload.restaurants;
                break;

            default:
                return state;
    }
    }

    eventType(state = {}, action)
    {

        return action.type;

    }

    currentRestaurant(state = {}, action)
    {
        switch (action.type)
        {

            case "INITIALIZE":
            case "SELECT_RESTAURANT":
                return  action.payload.currentRestaurant;
                break;

            default:
                return state;
    }

    }

    currentReviewsFunction(state = {}, action)
    {
        switch (action.type)
        {

            case "INITIALIZE":
            case "SELECT_RESTAURANT":
                return  action.payload.currentReviews;
                break;



            default:
                return state;
    }
    }

    selectedReviewFunction(state = {}, action)
    {

        switch (action.type)
        {

            case "INITIALIZE":
            case "SELECT_RESTAURANT":
            case 'SELECT_REVIEW':

                return action.payload.selectedReview;
                break;



            default:
                return state;
    }




    }

}

let instance = new RestaurantReducer();
let rState = instance.restaurantsStateFunction.bind(instance);
let cState = instance.currentRestaurant.bind(instance);
let eType = instance.eventType.bind(instance);
let currRev = instance.currentReviewsFunction.bind(instance);
let selRev = instance.selectedReviewFunction.bind(instance);
export {rState as restaurants};
export {cState as currentRestaurant};
export {eType as eventType};
export {currRev as currentReviews};
export {selRev as selectedReview};

export default instance;