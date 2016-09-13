import $ from 'jquery';


export default class RestaurantApiService
{

    constructor()
    {
        
        
        this.rootURL = 'http://donhenton-springmvc3.herokuapp.com:80/app/backbone/restaurant';
        let me = this;
       

    }

    getAllRestaurants()
    {

        var self = this;
        return $.ajax({
            type: 'GET',
            url: self.rootURL,
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





 