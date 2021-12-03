import React, {Component} from "react";
import {Collapse,Card,CardBody,CardTitle,
    CardSubtitle,CardText,CardImg,Button, CardFooter} from 'reactstrap';
import img from './images/SkyExterminatorWindow.jpg';

class Body extends Component{
    constructor(props){
        super(props);
        this.state = {
            isDescriptionShown: false
        };
        this.imageClicked = this.imageClicked.bind(this);
    }

    imageClicked(){
        console.log("Clicked");
        this.setState({
            isDescriptionShown: !this.state.isDescriptionShown
        });
    }

    render() {
        const dataObjects = this.props.dataObjects;
        const renderCard = (renderObject) => {
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
                    src={img}
                    width="100%"
                    onClick = {this.imageClicked}
                    />
                    <Collapse isOpen={this.state.isDescriptionShown}>
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
}

export default Body;