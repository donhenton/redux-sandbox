

//https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/guides/reducers.md

class RestaurantReducer
{

    constructor()
    {
        this.restaurants = null;
        this.currentRestaurantId = null;
        this.currentRestaurantItem = null;
    }

    restaurantStateFunction(state = {}, action)
    {
        switch (action.type)
        {
            case "INITIALIZE_PENDING":
            case "INITIALIZE_REJECTED":

                return [];
                break;
            case "INITIALIZE_FULFILLED":
                this.restaurants = action.payload;
                return  action.payload;
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
            case "INITIALIZE_PENDING":
            case "INITIALIZE_REJECTED":

                return state;
                break;
            case "INITIALIZE_FULFILLED":
                let initRestaurant = action.payload[2];
                this.currentRestaurantId = initRestaurant.id;
                this.currentRestaurantItem = initRestaurant;
                return  initRestaurant;
                break;

            case "SET_ID":
                let foundItem = this.restaurants.filter((r) => {
                    return r.id.toString() === action.payload.id.toString();
                });
                this.currentRestaurantId = action.payload.id.toString();
                this.currentRestaurantItem = foundItem[0];
                return foundItem[0];
                break;

            default:
                return state;
    }

    }

    currentReviewsFunction(state = {}, action)
    {
        if (!this.currentRestaurantItem)
            return state;
        else
            return this.currentRestaurantItem.reviewDTOs;
    }

    selectedReviewFunction(state = {}, action)
    {

        switch (action.type)
        {
            case "INITIALIZE_PENDING":
            case "INITIALIZE_REJECTED":

                return state;
                break;
            case "INITIALIZE_FULFILLED":
            case "SET_ID":

                return this.currentRestaurantItem.reviewDTOs[0];
                break;

            case 'SET_REVIEW_ID':
                let found = this.currentRestaurantItem.reviewDTOs
                        .filter((f)=> {
                            f.id.toString() === action.payload.reviewId.toString();
                });
                return found[0];
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
let rState = instance.restaurantStateFunction.bind(instance);
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