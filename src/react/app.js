import React from 'react';
import ReactDom from 'react-dom';
import { Component } from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Holder from './components/holder';
import MainContainer from './components/mainContainer'
        import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';


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

    let  store = createStore(reducers, {}, applyMiddleware(promiseMiddleware()));
    
    //todo get the restaurants as a promise then dispatch the initialization action

    //createStoreWithMiddleware(Reducers)
    //const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
    ReactDom.render((
<Provider store={store}>    
    <Router routes={createRoutes()} history={browserHistory} />
</Provider>


            ), document.querySelector('#react-container'));
}