import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import RestaurantSelector from './restaurantSelector';
import RestaurantDisplay from './restaurantDisplay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReviewDisplay from './reviewDisplay';
import RestaurantService from './../services/restaurantService';

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
        <h2>Redux Demo</h2>
        <p  className='green-content'><em><bold>(components marked with dashed boxes)</bold></em></p>
        <div className="row grouping">
            <div className="columnLeft well">
                 <RestaurantSelector />
                <br/>
                <p className="row">
                    The currently selected restaurant and review are maintained
                    in  the restaurant store. Components merely signal to the store to change
                    the pointers. Passing state via props is not used.
                </p>
            </div>
            <div className="columnRight">
                <RestaurantDisplay />
            </div>
        </div>

        <div className="row grouping">
            <div className="columnRight">
                
            </div>

        </div>
    </section>
</section>
                )







    }
}
 
 