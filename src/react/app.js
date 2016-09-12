import React from 'react';
import ReactDom from 'react-dom';
import { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Holder from './components/holder';
import MainContainer from './components/mainContainer'
import Reducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RestaurantDispatcher from './services/restaurantDispatcher';

let createRoutes = () => {

    let pathname = window.location.pathname;
    // console.log("pathname '"+pathname+"'")

    return (
<Route path={pathname} component={Holder} >
    <IndexRoute component={MainContainer} />

</Route>)


}



var loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.indexOf(document.readyState) > -1 && document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}


function run() {
    ReactDom.render((
<Provider store={createStore(Reducers)}>    
    <Router routes={createRoutes()} history={browserHistory} />
</Provider>


            ), document.querySelector('#react-container'));
}