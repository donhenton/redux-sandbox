import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import RestaurantSelector from './restaurantSelector';
import RestaurantDisplay from './restaurantDisplay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReviewDisplay from './reviewDisplay';
import RestaurantService from './../services/restaurantService';
import WaitComponent from './waitComponent';


export default class MainContainer extends Component {

    constructor()
    {
        super();


    }

    componentDidMount()
    {
        //ask for data
        RestaurantService.getAllRestaurants();

    }

    componentWillMount()
    {


        this.state = {};


    }

    render()
    {

        let me = this;



        return (
<section id="pageContainer">
    <section className="grouping" id="main">
        <WaitComponent/>
        <h2>Redux Demo</h2>
        <p  className='green-content'><em><bold>(components marked with dashed boxes)</bold></em></p>
        <div className="grouping">
            <div className="columnLeft well">
                <RestaurantSelector />
                <br/>
                <p className="row">
                    The restaurant service maintains the in-memory copy of the restaurants, current restaurant
                    and review. It handles the defaults for reviews when selecting a new restaurant. The service
                    then composes the reducer content, and passing it thru. There are <b>NO</b> specific action functions
                    in a separate folder.
                 
                </p>
                <p className="row">
                    React components contain no mappings for actions, instead they call the RestaurantService directly, 
                    which then responds indirectly by dispatching actions, which change the state of the components 
                    via the react-redux state bindings.
                 
                </p>
            </div>
            <div className="columnRight">
                <RestaurantDisplay />
                <div className="row grouping">

                    <ReviewDisplay />


                </div>
            </div>
        </div>
        

    </section>
</section>
                )







    }
}

 