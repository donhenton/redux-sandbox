import RestaurantService from './restaurantService';

class RestaurantDispatcher
{
    constructor()
    {
        
        this.restaurantService = new RestaurantService();
        this.store = null;
        
    }
    
    setStore(st)
    {
        this.store = st;
    }
    
    getStore()
    {
        return this.store;
    }
}
let instance = new RestaurantDispatcher();
export default instance;

