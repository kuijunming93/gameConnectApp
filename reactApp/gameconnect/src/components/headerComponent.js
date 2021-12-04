import React, { Component } from 'react';
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,Button,
    NavbarText,Offcanvas,OffcanvasHeader,OffcanvasBody,Carousel,
    CarouselIndicators,CarouselItem,CarouselCaption,CarouselControl,UncontrolledCarousel,
    Card,CardBody,CardTitle,CardText,CardImg} from 'reactstrap';
    import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isOffCanvasOpen: false
        };
        this.toggleOffCanvas = this.toggleOffCanvas.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }
    
    toggleOffCanvas() {
        this.setState({
            isOffCanvasOpen: !this.state.isOffCanvasOpen
        });
    }

    render(){
        const dataObjects = this.props.dataObjects;
        const renderOffCanvas = (renderObject) => {
            let imagePath = renderObject.image;
            return(
                <div key={renderObject.id}>
                    <a href={renderObject.pathURL}>
                        <img width="100%" src={imagePath} alt="Game Screenshot"/>
                    </a>
                    <div className="mt-3"><h5>{renderObject.name}</h5></div>
                    <div><small>{renderObject.genreName}</small></div>
                    <hr className="visible"></hr>
                </div>
            );
        }
        const offCanvasContents = dataObjects.map(renderObject => {
            return(
                <div key={renderObject.id} className="row">
                    {renderOffCanvas(renderObject)}
                </div>
            );
        });

        return(
            <div>
                <Navbar
                    color="dark"
                    container
                    dark
                    expand="md"
                    fixed="top"
                >
                    <NavbarBrand href="/">
                    <i class="fa fa-gamepad" aria-hidden="true"></i> GameConnect
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <Button 
                            color="primary"
                            onClick={this.toggleOffCanvas}>
                                <i class="fa fa-user-circle" aria-hidden="true"></i> Play Now
                            </Button>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <a href="https://kuijunming93.github.io/myWebpage/site2/"
                        style={{textDecoration: "none", color: "lightblue"}}>
                            <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i> GoTo GrandFlix</a>
                    </NavbarText>
                    </Collapse>
                </Navbar>
                <Offcanvas
                    scrollable
                    isOpen={this.state.isOffCanvasOpen}
                    toggle={this.toggleOffCanvas}
                    autoFocus={true}>
                    <OffcanvasHeader toggle={this.toggleOffCanvas}>
                    <i class="fa fa-gamepad" aria-hidden="true"></i> Game List
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <div className="container">
                        {offCanvasContents}
                        <strong>
                        Stay tuned for more to come..
                        </strong>
                        </div>
                    </OffcanvasBody>
                </Offcanvas>
                <UncontrolledCarousel
                items={[
                    {
                    altText: '',
                    caption: 'test',
                    key: 1,
                    src: 'https://picsum.photos/id/123/1200/600'
                    },
                    {
                    altText: '',
                    caption: '',
                    key: 2,
                    src: 'https://picsum.photos/id/456/1200/600'
                    },
                    {
                    altText: '',
                    caption: '',
                    key: 3,
                    src: 'https://picsum.photos/id/678/1200/600'
                    }
                ]}/>
            </div>
        );
    }
}

export default Header;