import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RestaurantService from './../services/restaurantService';

class ReviewSelector extends Component
{
    constructor()
    {
        super();
    }

    componentWillMount()
    {
        this.state = {currentReviewId: 0,  currentReviews: [], visible: false};
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({currentReviews: nextProps.currentReviews});
    }

    componentDidMount()
    {
 
    }

    generateSelector()
    {
        var me = this;
        if (this.state.currentReviews.length === 0)
        {
            return (<em>No Reviews Available!</em>);
        } else
        {
            var counter = 1;
            var options = this.state.currentReviews.map((review) =>
            {

                var reviewText = "Review " + counter;
                var optionItem = <option value={review.id} key={review.id}>{reviewText}</option>
                counter++;
                return optionItem;
            })


            return <select onChange={me.onReviewSelectChange.bind(me)} value={this.state.currentReviewId} id="reviewSelect">

    {options}

</select>
        }
    }

    onReviewSelectChange(ev)
    {
        console.log("reviewID change " + ev.target.value)
        this.setState({currentReviewId: ev.target.value})
        RestaurantService.setCurrentReview(ev.target.value);
    }
    render() {


        return (<div className="componentMarker reviewSelector grouping">
    <table className="table">
        <tbody>
            <tr><th>Review Selector</th><td>{this.generateSelector()}</td>
                <th>Review Count</th><td>{this.state.currentReviews.length}</td></tr>
        </tbody>
    </table>


</div>)
    }

}
////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {

    return {
        currentReviews: state.currentReviews
    };
}



export default connect(mapStateToProps, null)(ReviewSelector);