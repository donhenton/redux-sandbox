import $ from 'jquery';


class RestaurantService
{

    constructor(baseURL)
    {
        
        if (!baseURL)
            this.rootURL = 'http://donhenton-springmvc3.herokuapp.com:80/app/backbone/restaurant';
        else
            this.rootURL = baseURL;
        let me = this;
       

    }

    getAllRestaurants()
    {

        var self = this;
        return $.ajax({
            type: 'GET',
            url: self.baseURL,
            timeout: 1500,
            success: function (data) {
                return data;
            },
            error: function (err) {
                console.log('Error: Restaurant Problem');
                console.log(err);
                throw new Error(err.message)
                
            }
        });


    }

}
let instance = new RestaurantService();
export default instance;





 