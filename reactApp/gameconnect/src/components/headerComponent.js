import React, { Component } from 'react';
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink,Button,
    NavbarText,Offcanvas,OffcanvasHeader,OffcanvasBody,Carousel,
    CarouselIndicators,CarouselItem,CarouselCaption,CarouselControl,UncontrolledCarousel,
    Card,CardBody,CardTitle,CardText,CardImg} from 'reactstrap';
import img from './images/SkyExterminatorWindow.jpg';

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
            return(
                <div key={renderObject.id}>
                    <img width="100%" src={img} alt="Game Screenshot"/>
                    <hr className="visible"></hr>
                </div>
                // <Card >
                //     <CardBody>
                //     {/* <CardImg
                //     alt="Game Screenshot"
                //     top
                //     src={img}
                //     width="100%"
                //     /> */}
                //     <img width="100%" src={img} alt="Game Screenshot"/>
                //     <CardTitle tag="h6">
                //         {renderObject.name}
                //     </CardTitle>
                //     <CardText>
                //         <small className="text-muted">
                //         {renderObject.genreName}
                //         </small>
                //     </CardText>
                //     </CardBody>
                // </Card>
            );
        }
        const offCanvasContents = dataObjects.map(renderObject => {
            return(
                <div key={renderObject.id} className="row col-12">
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
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        Simple Text
                    </NavbarText>
                    </Collapse>
                </Navbar>
                <Offcanvas
                    className="offCanvasStyle"
                    scrollable
                    isOpen={this.state.isOffCanvasOpen}
                    toggle={this.toggleOffCanvas}
                    autoFocus={true}>
                    <OffcanvasHeader toggle={this.toggleOffCanvas}>
                    Game List
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <div className="container">
                        {offCanvasContents}
                        <strong>
                        End.
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