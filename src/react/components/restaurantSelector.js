import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {initialize,setCurrentRestaurant} from './../actions/actions';


class RestaurantSelector extends Component
{
    constructor()
    {
        super();
    }

    componentWillMount()
    {
        this.state = {eventType: 'test', restaurants: [],currentRestaurant: {id: -1},eventType: null}

    }
    
    
    componentWillReceiveProps(nextProps)
    {
        this.setState({restaurants: nextProps.restaurants,currentRestaurant: nextProps.currentRestaurant,eventType: nextProps.eventType});
    }

    componentDidMount()
    {
        //ask for data
        this.props.initialize();
    }

//    onChange(event, data) {
//
//        // this.setState({restaurants: data.restaurants, currentRestaurantId: data.currentRestaurantId, visible: true, eventType: event})
//    }

    selectorChange(ev)
    {

          this.props.setCurrentRestaurant(ev.target.value);

    }

    computeCssClass()
    {
        // return this.state.visible ? "visible" : "invisible";
        return 'fred';
    }

    generateChoices()
    {
        var choices = [];
        var me = this;

        this.state.restaurants.forEach(function (restaurant)
        {

            choices.push(<option  value={restaurant.id} key={restaurant.id}>{restaurant.name}</option>);


        });

        return choices;
    }

    render() {


        return <div className="componentMarker restaurantSelector">
    <div className="row">
        <select value={this.state.currentRestaurant.id} className={this.computeCssClass()} onChange={this.selectorChange.bind(this)}>
            {this.generateChoices()}
        </select>
    </div>
    <div className="row"> 
        <br/>
        <div className="row">
            <em>Event Type: </em>
            <span className="red-color"> {this.state.eventType}</span> 
        </div>
    </div>
</div>
    }

}
////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {

    return {
        currentRestaurant: state.currentRestaurant,
        restaurants: state.restaurants,
        eventType: state.eventType
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({initialize,setCurrentRestaurant}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantSelector);