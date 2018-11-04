import React, {Component} from 'react';

class Validation extends Component{

   
    render(){

        let message = "Text too short";

        if(this.props.length >= 5){
            message = "Text Long enough";
        }


        return (
            <div>{message}</div>
        );
    }

}

export default Validation;