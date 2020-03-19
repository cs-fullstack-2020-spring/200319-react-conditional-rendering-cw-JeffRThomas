import React, {Component} from 'react';
import {Fragment}   from 'react';
import ListOfItems from './ListOfItems';
import Sell from './Sell';
import Buy from './Buy';

class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state={};
    };
    render(){
        return(
            <Fragment>
                <h1>Buy Sell App</h1>
                <ListOfItems/>
                <Sell/>
                <Buy/>
            </Fragment>
        )
    };
};

export default AppContainer;