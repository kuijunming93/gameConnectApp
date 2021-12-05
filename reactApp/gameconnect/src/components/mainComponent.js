import React, { Component } from 'react';
import Header from "./headerComponent";
import JBTCarousel from "./carouselComponent";
import Body from "./bodyComponent";
import Footer from "./footerComponent";
import { DATAOBJECTS } from '../data/dataObjects';
import { INFORMATIONPANEL } from '../data/informationPanel';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataObjects: DATAOBJECTS,
            informationPanel: INFORMATIONPANEL
        }
    }

    render(){
        return(
            <div>
                <Header dataObjects={this.state.dataObjects}/>
                <JBTCarousel informationPanel={this.state.informationPanel}/>
                <Body dataObjects={this.state.dataObjects}/>
                <Footer />
            </div>
        );
    }
}

export default Main;