import React, {Component} from "react";
import { Link } from "react-router-dom";
import {Collapse,Card,CardBody,CardTitle,
    CardSubtitle,CardText,CardImg,Button} from 'reactstrap';

class Body extends Component{
    constructor(props){
        super(props);
        this.state = {
            isDescriptionShown: false
        };
        this.imageClicked = this.imageClicked.bind(this);
        this.createDescriptionState = this.createDescriptionState.bind(this);
        this.createInitialBodyContents = this.createInitialBodyContents.bind(this);
        this.checkState = this.checkState.bind(this);
    }

    imageClicked(clickedId){
        let newClickedId = "m" + clickedId.toString();
        this.setState({
            ...this.state, [newClickedId]: !this.state[newClickedId]
        });
    }

    createDescriptionState(addIndex){
        const index = "m" + addIndex.toString();
        return this.setState({
            ...this.state, [index]: false
        });
    }

    checkState(checkId){
        const newId = "m" + checkId.toString();
        return this.state[newId];
    }

    createInitialBodyContents(){
        const dataObjects = this.props.dataObjects;
        const renderCard = (renderObject) => {
            let imagePath = renderObject.image;
            return(
                <Card>
                    <CardBody>
                    <CardTitle tag="h5">
                        {renderObject.name}
                    </CardTitle>
                    <CardText>
                        <small className="text-muted">
                        {renderObject.genreName}
                        </small>
                    </CardText>
                    </CardBody>
                    <CardImg
                    className="bodyGameIcon"
                    alt="Game Screenshot"
                    bottom
                    src= {imagePath}
                    width="100%"
                    onClick = {() => this.imageClicked(renderObject.id)}
                    />
                    <Collapse isOpen={this.checkState(renderObject.id)}>
                    <Card body>
                        <CardTitle tag="h6"><strong>Compatibility</strong> <i className="fa fa-plug" aria-hidden="true"></i></CardTitle>
                        <CardSubtitle style={{fontSize:"90%"}}>
                            {renderObject.compatibility}
                            <div>{renderObject.noncompatible}</div>
                        </CardSubtitle>
                        <CardText className="text-muted" style={{fontSize:"80%"}}>
                            {renderObject.descriptions}</CardText>
                        <Button color="primary" href = {renderObject.pathURL}
                        >Play</Button>
                    </Card>
                    </Collapse>
                </Card>
            );
        }

        const BodyContents = dataObjects.map(renderObject => {
            return(
                <div key={renderObject.id} className="col-12 col-md-6 mt-3">
                    {renderCard(renderObject)}
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {BodyContents}
                </div>
            </div>
        );
    }

    componentDidMount(){
        const dataObjects = this.props.dataObjects;
        const createInitialState = dataObjects.map(eachObject => {
            return this.createDescriptionState(eachObject.id);;
        });
        this.createInitialBodyContents();
        return ({createInitialState});
    }

    render() {
        return this.createInitialBodyContents();
    }
}

export default Body;