import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'; 

class WaitComponent extends Component {

    constructor()
    {

        super();
        
    }
    
    componentWillUnmount()
    {
         
    }
    
    
    /**
     * call by props
     */
     componentWillReceiveProps(nextProps)
    {
        this.setState({show: nextProps.show})
         
    }
    
    
    /**
     * call by refs
     */
    setShow(s)
    {
        this.setState({show: s});
    }
    
    componentWillMount()
    {
  
        this.state = {show: this.props.show};
 
         
    }
    
      computeCss()
    {
        let css = "waitComponent hidden";
        if (this.state.show)
        {
            css = "waitComponent";
        }
        
        return css;
    }
    

    render()
    {
         //console.log("render wait "+this.state.show)
         return (<div className={this.computeCss()}>
                <div>
                    <img className="waitImage" src="img/ajax-loader.gif" />
                </div>
                <div className="waitMessage"> 
                    <span>Loading...</span>
                </div>
            </div>
            )

    }
}


////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {

    return {
        show: state.loading
    };
}


export default connect(mapStateToProps, null)(WaitComponent);

