import React from 'react';
import { Component } from 'react';

  
  export default class Holder extends Component {
        
  constructor()
  {
      super();
       
  }
        
  render() {
    return (
       
       
       
                <div className="main-app grouping">

                        {this.props.children}
                </div>
            
    
       
      
    );
  }
}