import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

class ReviewDisplay extends Component {

    constructor()
    {
        super();


    }

    componentDidMount()
    {


    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({selectedReview: nextProps.selectedReview});
    }

    componentWillMount()
    {


        this.state = {selectedReview: null, visible: false};


    }

    showReview()
    {
        if (this.state.selectedReview)
        {
            return this.state.selectedReview.reviewListing;
        }
    }

    render()
    {

     return <div className="componentMarker"><h4>REVIEW: </h4> <span>{this.showReview()}</span></div>



    }
}


////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {

    return {
        selectedReview: state.selectedReview
    };
}


export default connect(mapStateToProps, null)(ReviewDisplay);

