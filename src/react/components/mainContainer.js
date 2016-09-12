import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import RestaurantSelector from './restaurantSelector';



export default class Main extends Component {

    constructor()
    {
        super();


    }

    componentDidMount()
    {


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
        <h2>Reflux Event Demo</h2>
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

//<DisplayContainer showTextArea="true"/>