

//https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/guides/reducers.md

class MainReducer
{

    constructor()
    {
        this.restaurants = null;
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
                return  action.payload[2];
                break;

            case "SET_ID":
                let foundItem = this.restaurants.filter((r) => {
                    return r.id.toString() === action.payload.id.toString();
                });
                return foundItem[0];
                break;

            default:
                return state;
    }
    }

}

let instance = new MainReducer();
let rState = instance.restaurantStateFunction.bind(instance);
let cState = instance.currentRestaurant.bind(instance);
let eType = instance.eventType.bind(instance);
export {rState as restaurants};
export {cState as currentRestaurant};
export {eType as eventType};

export default instance;