import React, {Component} from 'react';
import {Fragment}   from 'react';

class ListOfItems extends Component{
    constructor(props){
        super(props);
        this.state={};
    };
    render(){
        return(
            <Fragment>
                <h1>ListOfItems Component</h1>
            </Fragment>
        )
    };
};

export default ListOfItems;