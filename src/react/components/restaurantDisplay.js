import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import ReviewSelector from './reviewSelector'
class RestaurantDisplay extends Component {

    constructor()
    {
        super();


    }

    componentDidMount()
    {


    }
    
     componentWillReceiveProps(nextProps)
    {
        this.setState({currentRestaurant: nextProps.currentRestaurant});
    }

    componentWillMount()
    {


        this.state = {currentRestaurant: {},visible: false};


    }

    render()
    {
        
        return <div className="componentMarker restaurantDisplay grouping">
            <table className="table table-striped">
            <tbody>
            <tr><th>Name</th><td className="nameItem">{this.state.currentRestaurant.name}</td></tr>
            <tr><th>City</th><td>{this.state.currentRestaurant.city}</td></tr>
            <tr><th>State</th><td>{this.state.currentRestaurant.state}</td></tr>
            </tbody>
            </table>
            <div className="row">
            
           <ReviewSelector />
            
            </div>
             
    </div>
        
    }
}


////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {

    return {
        currentRestaurant: state.currentRestaurant 
    };
}
 

export default connect(mapStateToProps, null)(RestaurantDisplay);