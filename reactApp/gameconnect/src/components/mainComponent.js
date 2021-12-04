import React, { Component } from 'react';
import Header from "./headerComponent";
import JBTCarousel from "./carouselComponent";
import Body from "./bodyComponent";
import { DATAOBJECTS } from '../data/dataObjects';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataObjects: DATAOBJECTS
        }
    }

    render(){
        return(
            <div>
                <Header dataObjects={this.state.dataObjects}/>
                <JBTCarousel />
                <Body dataObjects={this.state.dataObjects}/>
            </div>
        );
    }
}

export default Main;