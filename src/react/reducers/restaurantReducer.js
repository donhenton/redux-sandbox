

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
        switch (action.type)
        {


            default:
                return action.type;
    }
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

                return action.payload.selectedReview;
                break;

            case 'SET_REVIEW_ID':
                let found = this.currentRestaurantItem.reviewDTOs
                        .filter((f) => {
                            return  f.id.toString() === action.payload.reviewId.toString();
                        });
                if (found && found.length && found.length === 1)
                {
                    return found[0];
                } else
                {
                    return state;
                }

                break;

            default:
                return state;
        }


        if (!this.currentRestaurantItem)
            return state;
        else
        {
            let selectedRev = this.currentRestaurantItem.reviewDTOs
                    .filter((rev) => {
                        return (rev.id.toString()) === action.payload.reviewId.toString();
                    })
            return selectedRev[0];
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