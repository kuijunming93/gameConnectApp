import React, {Component} from "react";
import {Collapse,Card,CardBody,CardTitle,
    CardSubtitle,CardText,CardImg,Button, CardFooter} from 'reactstrap';

class Body extends Component{
    constructor(props){
        super(props);
        this.state = {
            isDescriptionShown: false
        };
        this.imageClicked = this.imageClicked.bind(this);
        this.createDescriptionState = this.createDescriptionState.bind(this);
        this.createInitialBodyContents = this.createInitialBodyContents.bind(this);
    }

    imageClicked(clickedId){
        console.log("Clicked onto item index " + clickedId);
        console.log(clickedId);
        this.setState({
            ...this.state, [clickedId]: !this.state[clickedId]
        });
        console.log(this.state);
    }

    createDescriptionState(addIndex){
        const index = addIndex.toString();
        return this.setState({
            ...this.state, [index]: false
        });
    }

    createInitialBodyContents(){
        console.log("Ran createInitialBodyContents");
        const dataObjects = this.props.dataObjects;
        const renderCard = (renderObject) => {
            let imagePath = renderObject.image;
            const objectIndex = renderObject.id.toString();
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
                    alt="Game Screenshot"
                    bottom
                    src= {imagePath}
                    width="100%"
                    onClick = {() => this.imageClicked(objectIndex)}
                    />
                    <Collapse isOpen={this.state.objectIndex}>
                    <Card body>
                        <CardTitle tag="h6">Compatibility</CardTitle>
                        <CardSubtitle>
                            {renderObject.compatibility}
                        </CardSubtitle>
                        <CardText className="text-muted">
                            {renderObject.descriptions}</CardText>
                        <Button color="primary">Play</Button>
                    </Card>
                    </Collapse>
                </Card>
            );
        }

        const BodyContents = dataObjects.map(renderObject => {
            return(
                <div key={renderObject.id} className="col-12 col-md-6 mt-1">
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

    static getDerivedStateFromProps(props,state){
        console.log("comefirst");
    }

    componentDidMount(){
        console.log("Mounted");
        const dataObjects = this.props.dataObjects;
        const createInitialState = dataObjects.map(eachObject => {
            return this.createDescriptionState(eachObject.id);;
        });
        this.createInitialBodyContents();
        return ({createInitialState});
    }

    render() {
        console.log("Rendered");
        return this.createInitialBodyContents();
    }
}

export default Body;