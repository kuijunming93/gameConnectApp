import React, {Component} from "react";
import {Collapse,Card,CardBody,CardTitle,
    CardSubtitle,CardText,CardImg,Button, CardFooter} from 'reactstrap';

class Body extends Component{
    constructor(props){
        super(props);
        this.state = {
            isDescriptionShown: false
            // memoryLoadedCount: 6
        };
        this.imageClicked = this.imageClicked.bind(this);
        this.createStateDescriptionShown = this.createStateDescriptionShown.bind(this);
        // this.updateMemoryLoadedCount = this.updateMemoryLoadedCount.bind(this);
    }

    imageClicked(clickedId){
        console.log("Clicked");
        this.setState({
            isDescriptionShown: !this.state.isDescriptionShown
        });
    }

    createStateDescriptionShown(addId){
        if (!this.state.contains(addId))
            this.setState({
                [addId]: false
                // isDescriptionShown: this.state.isDescriptionShown.concat([false])
            });
        console.log("Created " + this.state.addId);
    }

    // updateMemoryLoadedCount(){
    //     this.setState({
    //         memoryLoadedCount: this.props.dataObjects.length
    //     });
    //     console.log("Updated memory with count of " + this.state.memoryLoadedCount);
    // }

    render() {
        const dataObjects = this.props.dataObjects;
        const renderCard = (renderObject) => {
            // this.createStateDescriptionShown(renderObject.id);
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
                    alt="Game Screenshot"
                    bottom
                    src= {imagePath}
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
                    {/* {this.updateMemoryLoadedCount()} */}
                </div>
            </div>
        );
    }
}

export default Body;